import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies default size classes when no size prop is provided', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-base');
  });

  it('applies small size classes when size is "sm"', () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm');
  });

  it('applies large size classes when size is "lg"', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-8', 'py-4', 'text-lg');
  });

  it('applies custom className along with base classes', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('rounded-full', 'font-medium');
  });

  it('forwards additional props to button element', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} data-testid="test-button">Test Button</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled when disabled prop is passed', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders children inside a span with specific classes', () => {
    const { container } = render(<Button>Content</Button>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('relative', 'flex', 'items-center', 'justify-center', 'gap-2');
    expect(span).toHaveTextContent('Content');
  });

  it('handles invalid size prop by falling back to default', () => {
    render(<Button size="invalid">Invalid Size</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-base');
  });

  it('applies all base classes for styling', () => {
    render(<Button>Styled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'relative',
      'overflow-hidden',
      'rounded-full',
      'font-medium',
      'bg-primary',
      'text-primary-foreground'
    );
  });

  it('renders multiple children elements correctly', () => {
    render(
      <Button>
        <span>Icon</span>
        <span>Text</span>
      </Button>
    );
    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('handles type attribute correctly', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});