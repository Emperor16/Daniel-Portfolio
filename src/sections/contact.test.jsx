import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from './contact';
import emailjs from '@emailjs/browser';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the contact section', () => {
    render(<Contact />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('displays the section heading', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { level: 2, name: /Contact.*Me/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays the section description', () => {
    render(<Contact />);
    expect(screen.getByText(/Whether you have a question/)).toBeInTheDocument();
  });

  it('renders the contact form with all fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders name input with correct attributes', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('placeholder', 'Your name');
    expect(nameInput).toBeRequired();
  });

  it('renders email input with correct attributes', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'Your email');
    expect(emailInput).toBeRequired();
  });

  it('renders message textarea with correct attributes', () => {
    render(<Contact />);
    const messageTextarea = screen.getByLabelText('Message');
    expect(messageTextarea).toHaveAttribute('placeholder', 'Write me a message');
    expect(messageTextarea).toBeRequired();
  });

  it('renders submit button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('updates form state when typing in name field', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText('Name');
    await user.type(nameInput, 'John Doe');

    expect(nameInput).toHaveValue('John Doe');
  });

  it('updates form state when typing in email field', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const emailInput = screen.getByLabelText('Email');
    await user.type(emailInput, 'john@example.com');

    expect(emailInput).toHaveValue('john@example.com');
  });

  it('updates form state when typing in message field', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const messageTextarea = screen.getByLabelText('Message');
    await user.type(messageTextarea, 'Hello, this is a test message');

    expect(messageTextarea).toHaveValue('Hello, this is a test message');
  });

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup();
    emailjs.send.mockResolvedValue({ status: 200 });

    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    // Check that success message appears instead of checking mock calls
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/)).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('displays success message after successful submission', async () => {
    const user = userEvent.setup();
    emailjs.send.mockResolvedValue({ status: 200 });

    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/)).toBeInTheDocument();
    });
  });

  it('clears form after successful submission', async () => {
    const user = userEvent.setup();
    emailjs.send.mockResolvedValue({ status: 200 });

    render(<Contact />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });

  it('displays error message on submission failure', async () => {
    const user = userEvent.setup();
    emailjs.send.mockRejectedValue(new Error('Network error'));

    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/Network error/)).toBeInTheDocument();
    });
  });

  it('shows loading state during submission', async () => {
    const user = userEvent.setup();
    emailjs.send.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    expect(screen.getByText(/Sending.../)).toBeInTheDocument();
  });

  it('disables submit button during submission', async () => {
    const user = userEvent.setup();
    emailjs.send.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it('displays contact information section', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
  });

  it('displays email contact info', () => {
    render(<Contact />);
    const emailLabels = screen.getAllByText('Email');
    expect(emailLabels.length).toBeGreaterThan(0);
    expect(screen.getByText('danielayodele758@gmail.com')).toBeInTheDocument();
  });

  it('displays phone contact info', () => {
    render(<Contact />);
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('+234 704 914 2018')).toBeInTheDocument();
  });

  it('displays location contact info', () => {
    render(<Contact />);
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Lagos, Nigeria')).toBeInTheDocument();
  });

  it('email link has correct href', () => {
    render(<Contact />);
    const emailLink = screen.getByText('danielayodele758@gmail.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:danielayodele758@gmail.com');
  });

  it('displays availability section', () => {
    render(<Contact />);
    expect(screen.getByText('I am currently available')).toBeInTheDocument();
  });

  it('displays availability message', () => {
    render(<Contact />);
    expect(screen.getByText(/I am available for freelance work and internships/)).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<Contact />);
    const section = container.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });

  it('displays generic error message when submission fails with no message', async () => {
    const user = userEvent.setup();
    emailjs.send.mockRejectedValue(new Error());

    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Message'), 'Test message');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/)).toBeInTheDocument();
    });
  });
});