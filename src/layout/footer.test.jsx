import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders the footer element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('displays copyright text with current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(`© ${currentYear} Daniel Ayodele. All rights reserved.`)).toBeInTheDocument();
  });

  it('displays copyright for year 2024', () => {
    vi.setSystemTime(new Date('2024-01-01'));
    render(<Footer />);
    expect(screen.getByText('© 2024 Daniel Ayodele. All rights reserved.')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('displays copyright for year 2025', () => {
    vi.setSystemTime(new Date('2025-12-31'));
    render(<Footer />);
    expect(screen.getByText('© 2025 Daniel Ayodele. All rights reserved.')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('renders all three social media links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('renders GitHub link with correct href', () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Emperor16/');
  });

  it('renders LinkedIn link with correct href', () => {
    render(<Footer />);
    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/ayodele-daniel-33484a3a8/');
  });

  it('renders Twitter link with correct href', () => {
    render(<Footer />);
    const twitterLink = screen.getByLabelText('Twitter');
    expect(twitterLink).toHaveAttribute('href', 'https://x.com/DanielO23937500');
  });

  it('all social links open in new tab', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('all social links have noopener noreferrer for security', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('has proper accessibility labels for all social links', () => {
    render(<Footer />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
  });

  it('applies correct layout classes for responsive design', () => {
    const { container } = render(<Footer />);
    const flexContainer = container.querySelector('.flex.flex-col.md\\:flex-row');
    expect(flexContainer).toBeInTheDocument();
  });

  it('renders icons for each social platform', () => {
    const { container } = render(<Footer />);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(3);
  });

  it('maintains consistent icon sizing', () => {
    const { container } = render(<Footer />);
    const icons = container.querySelectorAll('svg.w-5.h-5');
    expect(icons).toHaveLength(3);
  });
});