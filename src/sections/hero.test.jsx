import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './hero';

// Mock the AnimatedBorderButton component
vi.mock('../components/animatedBorderButton', () => ({
  AnimatedBorderButton: ({ children }) => <button>{children}</button>,
}));

describe('Hero Component', () => {
  it('renders the hero section', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('displays the status badge with role', () => {
    render(<Hero />);
    expect(screen.getByText(/Full-Stack Engineer \+ Video Editor/)).toBeInTheDocument();
  });

  it('displays the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Every/)).toBeInTheDocument();
    expect(screen.getByText(/Service/)).toBeInTheDocument();
    expect(screen.getByText(/is done with/)).toBeInTheDocument();
  });

  it('displays the tagline with Dexterity and Excellence', () => {
    render(<Hero />);
    expect(screen.getByText(/Dexterity and/)).toBeInTheDocument();
    expect(screen.getByText(/Excellence/)).toBeInTheDocument();
  });

  it('displays the introduction paragraph', () => {
    render(<Hero />);
    expect(screen.getByText(/Hello there, I am Daniel Ayodele/)).toBeInTheDocument();
  });

  it('mentions specialization in Typescript, Next.js and Nodejs', () => {
    render(<Hero />);
    expect(screen.getByText(/Typescript, Next.js and Nodejs/)).toBeInTheDocument();
  });

  it('renders Contact me button', () => {
    render(<Hero />);
    const contactButtons = screen.getAllByText(/Contact me/i);
    expect(contactButtons.length).toBeGreaterThan(0);
  });

  it('renders Download CV button', () => {
    render(<Hero />);
    expect(screen.getByText(/Download CV/)).toBeInTheDocument();
  });

  it('displays social media section label', () => {
    render(<Hero />);
    expect(screen.getByText('Get in contact:')).toBeInTheDocument();
  });

  it('renders GitHub social link', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link');
    const githubLink = links.find(link => link.getAttribute('href') === 'https://github.com/Emperor16');
    expect(githubLink).toBeInTheDocument();
  });

  it('renders LinkedIn social link', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link');
    const linkedinLink = links.find(link => link.getAttribute('href') === 'https://www.linkedin.com/in/ayodele-daniel-33484a3a8/');
    expect(linkedinLink).toBeInTheDocument();
  });

  it('renders Twitter social link', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link');
    const twitterLink = links.find(link => link.getAttribute('href') === 'https://x.com/DanielO23937500');
    expect(twitterLink).toBeInTheDocument();
  });

  it('all social links open in new tab', () => {
    render(<Hero />);
    const socialLinks = screen.getAllByRole('link').filter(link =>
      link.getAttribute('target') === '_blank'
    );
    expect(socialLinks.length).toBeGreaterThanOrEqual(3);
  });

  it('all social links have noopener noreferrer', () => {
    render(<Hero />);
    const socialLinks = screen.getAllByRole('link').filter(link =>
      link.getAttribute('rel') === 'noopener noreferrer'
    );
    expect(socialLinks.length).toBeGreaterThanOrEqual(3);
  });

  it('displays profile image with correct alt text', () => {
    render(<Hero />);
    const image = screen.getByAltText('Daniel Ayodele');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/profile-photo.png');
  });

  it('displays "Available for work" badge', () => {
    render(<Hero />);
    expect(screen.getByText('Available for work')).toBeInTheDocument();
  });

  it('displays years of experience badge', () => {
    render(<Hero />);
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
  });

  it('displays skills cloud section header', () => {
    render(<Hero />);
    expect(screen.getByText('Tools and Frameworks I have gained mastery on')).toBeInTheDocument();
  });

  it('displays all skill items in the cloud', () => {
    render(<Hero />);
    const skills = ['Typescript', 'Next.js', 'Nodejs', 'React Native', 'Flutter', 'Python', 'MongoDB', 'SQL', 'Git', 'Github Actions', 'Figma'];

    skills.forEach(skill => {
      const skillElements = screen.getAllByText(skill);
      expect(skillElements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('displays Typescript skill', () => {
    render(<Hero />);
    expect(screen.getAllByText('Typescript').length).toBeGreaterThanOrEqual(1);
  });

  it('displays Next.js skill', () => {
    render(<Hero />);
    expect(screen.getAllByText('Next.js').length).toBeGreaterThanOrEqual(1);
  });

  it('displays React Native skill', () => {
    render(<Hero />);
    expect(screen.getAllByText('React Native').length).toBeGreaterThanOrEqual(1);
  });

  it('displays Python skill', () => {
    render(<Hero />);
    expect(screen.getAllByText('Python').length).toBeGreaterThanOrEqual(1);
  });

  it('displays MongoDB skill', () => {
    render(<Hero />);
    expect(screen.getAllByText('MongoDB').length).toBeGreaterThanOrEqual(1);
  });

  it('displays Figma skill', () => {
    render(<Hero />);
    expect(screen.getAllByText('Figma').length).toBeGreaterThanOrEqual(1);
  });

  it('displays scroll down indicator', () => {
    render(<Hero />);
    expect(screen.getByText('Scroll')).toBeInTheDocument();
  });

  it('scroll indicator links to about section', () => {
    render(<Hero />);
    const scrollLink = screen.getByText('Scroll').closest('a');
    expect(scrollLink).toHaveAttribute('href', '#about');
  });

  it('renders background image', () => {
    const { container } = render(<Hero />);
    const bgImage = container.querySelector('img[src="/hero-bg.jpg"]');
    expect(bgImage).toBeInTheDocument();
  });

  it('has min-h-screen class for full viewport height', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('min-h-screen');
  });

  it('renders decorative dots for visual effect', () => {
    const { container } = render(<Hero />);
    const dots = container.querySelectorAll('.rounded-full.opacity-60');
    expect(dots.length).toBe(30);
  });

  it('applies grid layout for responsive design', () => {
    const { container } = render(<Hero />);
    const grid = container.querySelector('.lg\\:grid-cols-2');
    expect(grid).toBeInTheDocument();
  });

  it('renders skills carousel animation', () => {
    const { container } = render(<Hero />);
    const carousel = container.querySelector('.animate-auto-carousel');
    expect(carousel).toBeInTheDocument();
  });

  it('duplicates skills for infinite carousel effect', () => {
    render(<Hero />);
    // Each skill should appear at least twice for the infinite scroll effect
    const typescriptElements = screen.getAllByText('Typescript');
    expect(typescriptElements.length).toBeGreaterThanOrEqual(2);
  });
});