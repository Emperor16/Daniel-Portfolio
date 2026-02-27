import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Project } from './project';

// Mock the AnimatedBorderButton component
vi.mock('../components/animatedBorderButton', () => ({
  AnimatedBorderButton: ({ children, className }) => <button className={className}>{children}</button>,
}));

describe('Project Component', () => {
  it('renders the project section', () => {
    const { container } = render(<Project />);
    const section = container.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });

  it('displays the section header', () => {
    render(<Project />);
    expect(screen.getByText('Featured work')).toBeInTheDocument();
  });

  it('displays the section heading', () => {
    render(<Project />);
    expect(screen.getByText(/Projects that/)).toBeInTheDocument();
    expect(screen.getByText(/solve a problem/)).toBeInTheDocument();
  });

  it('displays the section description', () => {
    render(<Project />);
    expect(screen.getByText(/A selection of my recent works/)).toBeInTheDocument();
  });

  it('renders all four projects', () => {
    render(<Project />);
    expect(screen.getByText('LMS Dashboard')).toBeInTheDocument();
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
  });

  it('displays correct description for LMS Dashboard', () => {
    render(<Project />);
    expect(screen.getByText('A comprehensive dashboard for managing learning management systems.')).toBeInTheDocument();
  });

  it('displays correct description for E-Commerce Platform', () => {
    render(<Project />);
    expect(screen.getByText('A full-featured e-commerce platform with payment integration.')).toBeInTheDocument();
  });

  it('displays correct description for Task Management App', () => {
    render(<Project />);
    expect(screen.getByText('A collaborative task management application for teams.')).toBeInTheDocument();
  });

  it('displays correct description for Analytics Dashboard', () => {
    render(<Project />);
    expect(screen.getByText('A real-time analytics dashboard with data visualization.')).toBeInTheDocument();
  });

  it('renders project images with correct src', () => {
    const { container } = render(<Project />);
    const images = container.querySelectorAll('img');
    expect(images[0]).toHaveAttribute('src', '/project1.png');
    expect(images[1]).toHaveAttribute('src', '/project2.png');
    expect(images[2]).toHaveAttribute('src', '/project3.png');
    expect(images[3]).toHaveAttribute('src', '/project4.png');
  });

  it('renders project images with correct alt text', () => {
    render(<Project />);
    expect(screen.getByAltText('LMS Dashboard')).toBeInTheDocument();
    expect(screen.getByAltText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByAltText('Task Management App')).toBeInTheDocument();
    expect(screen.getByAltText('Analytics Dashboard')).toBeInTheDocument();
  });

  it('displays React tag for projects that use React', () => {
    render(<Project />);
    const reactTags = screen.getAllByText('React');
    expect(reactTags).toHaveLength(3); // LMS Dashboard, Task Management, Analytics Dashboard
  });

  it('displays Node.js tag for LMS Dashboard', () => {
    render(<Project />);
    const nodeTags = screen.getAllByText('Node.js');
    expect(nodeTags.length).toBeGreaterThanOrEqual(1);
  });

  it('displays MongoDB tag for LMS Dashboard', () => {
    render(<Project />);
    const mongoTags = screen.getAllByText('MongoDB');
    expect(mongoTags.length).toBeGreaterThanOrEqual(1);
  });

  it('displays Tailwind CSS tag for multiple projects', () => {
    render(<Project />);
    const tailwindTags = screen.getAllByText('Tailwind CSS');
    expect(tailwindTags).toHaveLength(2);
  });

  it('displays Next.js tag for E-Commerce Platform', () => {
    render(<Project />);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('displays Stripe tag for E-Commerce Platform', () => {
    render(<Project />);
    expect(screen.getByText('Stripe')).toBeInTheDocument();
  });

  it('displays PostgreSQL tag for E-Commerce Platform', () => {
    render(<Project />);
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });

  it('displays Firebase tag for Task Management App', () => {
    render(<Project />);
    expect(screen.getByText('Firebase')).toBeInTheDocument();
  });

  it('displays Material UI tag for Task Management App', () => {
    render(<Project />);
    expect(screen.getByText('Material UI')).toBeInTheDocument();
  });

  it('displays Redux tag for Task Management App', () => {
    render(<Project />);
    expect(screen.getByText('Redux')).toBeInTheDocument();
  });

  it('displays D3.js tag for Analytics Dashboard', () => {
    render(<Project />);
    expect(screen.getByText('D3.js')).toBeInTheDocument();
  });

  it('renders GitHub links for all projects', () => {
    render(<Project />);
    const links = screen.getAllByRole('link');
    const githubLinks = links.filter(link => {
      const href = link.getAttribute('href');
      return href && href.includes('github.com/Emperor16');
    });
    expect(githubLinks.length).toBeGreaterThanOrEqual(4);
  });

  it('GitHub link for LMS Dashboard is correct', () => {
    render(<Project />);
    const links = screen.getAllByRole('link');
    const lmsGithubLink = links.find(link =>
      link.getAttribute('href') === 'https://github.com/Emperor16/lms-dashboard'
    );
    expect(lmsGithubLink).toBeInTheDocument();
  });

  it('GitHub link for E-Commerce Platform is correct', () => {
    render(<Project />);
    const links = screen.getAllByRole('link');
    const ecommerceGithubLink = links.find(link =>
      link.getAttribute('href') === 'https://github.com/Emperor16/ecommerce-platform'
    );
    expect(ecommerceGithubLink).toBeInTheDocument();
  });

  it('GitHub link for Task Management App is correct', () => {
    render(<Project />);
    const links = screen.getAllByRole('link');
    const taskGithubLink = links.find(link =>
      link.getAttribute('href') === 'https://github.com/Emperor16/task-manager'
    );
    expect(taskGithubLink).toBeInTheDocument();
  });

  it('GitHub link for Analytics Dashboard is correct', () => {
    render(<Project />);
    const links = screen.getAllByRole('link');
    const analyticsGithubLink = links.find(link =>
      link.getAttribute('href') === 'https://github.com/Emperor16/analytics-dashboard'
    );
    expect(analyticsGithubLink).toBeInTheDocument();
  });

  it('renders View All Projects button', () => {
    render(<Project />);
    expect(screen.getByText('View All Projects')).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<Project />);
    const section = container.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });

  it('applies grid layout for responsive design', () => {
    const { container } = render(<Project />);
    const grid = container.querySelector('.md\\:grid-cols-2');
    expect(grid).toBeInTheDocument();
  });

  it('applies glass effect to project cards', () => {
    const { container } = render(<Project />);
    const glassCards = container.querySelectorAll('.glass');
    expect(glassCards.length).toBeGreaterThanOrEqual(4);
  });

  it('renders project cards with proper structure', () => {
    const { container } = render(<Project />);
    const projectCards = container.querySelectorAll('.glass.rounded-xl');
    expect(projectCards).toHaveLength(4);
  });

  it('each project has image with aspect-video class', () => {
    const { container } = render(<Project />);
    const images = container.querySelectorAll('.aspect-video img');
    expect(images).toHaveLength(4);
  });

  it('technology tags have proper styling', () => {
    const { container } = render(<Project />);
    const tags = container.querySelectorAll('.rounded-full.bg-surface');
    expect(tags.length).toBeGreaterThan(0);
  });
});