import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock all section components
vi.mock('@/sections/hero', () => ({
  Hero: () => <div data-testid="hero-section">Hero Section</div>,
}));

vi.mock('@/layout/navbar', () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>,
}));

vi.mock('@/sections/About', () => ({
  About: () => <div data-testid="about-section">About Section</div>,
}));

vi.mock('@/sections/project', () => ({
  Project: () => <div data-testid="project-section">Project Section</div>,
}));

vi.mock('@/sections/testimonials', () => ({
  Testimonials: () => <div data-testid="testimonials-section">Testimonials Section</div>,
}));

vi.mock('@/sections/contact', () => ({
  Contact: () => <div data-testid="contact-section">Contact Section</div>,
}));

vi.mock('@/sections/Experience', () => ({
  Experience: () => <div data-testid="experience-section">Experience Section</div>,
}));

vi.mock('./layout/footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

describe('App Component', () => {
  it('renders the app container with correct classes', () => {
    const { container } = render(<App />);
    const appDiv = container.firstChild;
    expect(appDiv).toHaveClass('min-h-screen', 'overflow-x-hidden');
  });

  it('renders the Navbar component', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders the main element', () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders the Hero section', () => {
    render(<App />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('renders the About section', () => {
    render(<App />);
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
  });

  it('renders the Project section', () => {
    render(<App />);
    expect(screen.getByTestId('project-section')).toBeInTheDocument();
  });

  it('renders the Experience section', () => {
    render(<App />);
    expect(screen.getByTestId('experience-section')).toBeInTheDocument();
  });

  it('renders the Testimonials section', () => {
    render(<App />);
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
  });

  it('renders the Contact section', () => {
    render(<App />);
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders sections in correct order within main', () => {
    const { container } = render(<App />);
    const main = container.querySelector('main');
    const sections = main.children;

    expect(sections[0]).toHaveAttribute('data-testid', 'hero-section');
    expect(sections[1]).toHaveAttribute('data-testid', 'about-section');
    expect(sections[2]).toHaveAttribute('data-testid', 'project-section');
    expect(sections[3]).toHaveAttribute('data-testid', 'experience-section');
    expect(sections[4]).toHaveAttribute('data-testid', 'testimonials-section');
    expect(sections[5]).toHaveAttribute('data-testid', 'contact-section');
  });

  it('navbar is rendered before main content', () => {
    const { container } = render(<App />);
    const navbar = screen.getByTestId('navbar');
    const main = container.querySelector('main');

    const navbarPosition = Array.from(container.firstChild.children).indexOf(navbar.parentElement);
    const mainPosition = Array.from(container.firstChild.children).indexOf(main);

    expect(navbarPosition).toBeLessThan(mainPosition);
  });

  it('footer is rendered after main content', () => {
    const { container } = render(<App />);
    const footer = screen.getByTestId('footer');
    const main = container.querySelector('main');

    const mainPosition = Array.from(container.firstChild.children).indexOf(main);
    const footerPosition = Array.from(container.firstChild.children).indexOf(footer);

    expect(footerPosition).toBeGreaterThan(mainPosition);
  });

  it('has exactly three top-level elements (navbar, main, footer)', () => {
    const { container } = render(<App />);
    const topLevelElements = container.firstChild.children;
    expect(topLevelElements).toHaveLength(3);
  });

  it('main element contains exactly six sections', () => {
    const { container } = render(<App />);
    const main = container.querySelector('main');
    expect(main.children).toHaveLength(6);
  });

  it('applies overflow-x-hidden to prevent horizontal scroll', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('overflow-x-hidden');
  });

  it('applies min-h-screen for full viewport height', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('min-h-screen');
  });
});