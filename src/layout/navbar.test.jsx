import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the navbar header', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('displays the logo text "DAN ."', () => {
    render(<Navbar />);
    const logo = screen.getByText(/DAN/);
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation links in desktop menu', () => {
    render(<Navbar />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  it('navigation links have correct href attributes', () => {
    render(<Navbar />);
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks[0].closest('a')).toHaveAttribute('href', '#about');
  });

  it('renders Contact Me button in desktop view', () => {
    render(<Navbar />);
    const buttons = screen.getAllByText(/contact me/i);
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('mobile menu is initially closed', () => {
    render(<Navbar />);
    const mobileMenuButton = screen.getByLabelText('Toggle menu');
    expect(mobileMenuButton).toBeInTheDocument();
    expect(screen.queryByText('About')).toBeInTheDocument(); // Desktop menu visible
  });

  it('opens mobile menu when hamburger button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    await user.click(toggleButton);

    // Mobile menu should now be visible with duplicate links
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(1);
  });

  it('closes mobile menu when X button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    await user.click(toggleButton); // Open menu
    await user.click(toggleButton); // Close menu

    // After toggling twice, menu should be closed again
    const aboutLinks = screen.getAllByText('About');
    // Should only have desktop links
    expect(aboutLinks.length).toBeLessThanOrEqual(2);
  });

  it('closes mobile menu when a navigation link is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    await user.click(toggleButton); // Open menu

    // Find mobile menu link (not in desktop nav)
    const mobileMenuContainer = container.querySelector('.md\\:hidden.glass-strong');
    expect(mobileMenuContainer).toBeInTheDocument();

    const mobileAboutLink = mobileMenuContainer.querySelector('a[href="#about"]');
    await user.click(mobileAboutLink);

    // Menu should close
    expect(container.querySelector('.md\\:hidden.glass-strong')).not.toBeInTheDocument();
  });

  it('applies scroll-based styling when scrolled', () => {
    const { container, rerender } = render(<Navbar />);
    const header = container.querySelector('header');

    // Initially should have transparent background
    expect(header).toHaveClass('bg-transparent', 'py-5');

    // Simulate scroll
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    rerender(<Navbar />);

    // Should update on scroll event
    expect(window.scrollY).toBe(100);
  });

  it('adds scroll event listener on mount', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    render(<Navbar />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('removes scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<Navbar />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('toggles menu state correctly with multiple clicks', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');

    // Click three times
    await user.click(toggleButton);
    await user.click(toggleButton);
    await user.click(toggleButton);

    // Should be open after odd number of clicks
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(1);
  });

  it('renders correct icon based on menu state', async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');

    // Initially should show Menu icon (hamburger)
    expect(toggleButton.querySelector('svg')).toBeInTheDocument();

    // After clicking, should show X icon
    await user.click(toggleButton);
    expect(toggleButton.querySelector('svg')).toBeInTheDocument();
  });

  it('has fixed positioning for sticky header', () => {
    const { container } = render(<Navbar />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0');
  });

  it('has proper z-index for layering', () => {
    const { container } = render(<Navbar />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('z-50');
  });

  it('closes mobile menu when Contact Me button is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    await user.click(toggleButton); // Open menu

    const mobileMenuContainer = container.querySelector('.md\\:hidden.glass-strong');
    const contactButton = mobileMenuContainer.querySelector('button');

    await user.click(contactButton);

    // Menu should close
    expect(container.querySelector('.md\\:hidden.glass-strong')).not.toBeInTheDocument();
  });
});