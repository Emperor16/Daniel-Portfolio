import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Experience } from './Experience';

describe('Experience Component', () => {
  it('renders the experience section', () => {
    render(<Experience />);
    expect(screen.getByText('Career Journey')).toBeInTheDocument();
  });

  it('displays the section heading', () => {
    render(<Experience />);
    expect(screen.getByText(/Experience that/)).toBeInTheDocument();
    expect(screen.getByText(/Speaks volumes/)).toBeInTheDocument();
  });

  it('displays the section description', () => {
    render(<Experience />);
    expect(screen.getByText(/From startups to established enterprises/)).toBeInTheDocument();
  });

  it('renders all four experience items', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Junior Developer')).toBeInTheDocument();
  });

  it('displays correct period for each experience', () => {
    render(<Experience />);
    expect(screen.getByText('2023 - Present')).toBeInTheDocument();
    expect(screen.getByText('2022 - 2023')).toBeInTheDocument();
    expect(screen.getByText('2021 - 2022')).toBeInTheDocument();
    expect(screen.getByText('2020 - 2021')).toBeInTheDocument();
  });

  it('displays correct companies for each role', () => {
    render(<Experience />);
    expect(screen.getByText('Tech Solutions Inc.')).toBeInTheDocument();
    expect(screen.getByText('Tremindds Innovation Ltd')).toBeInTheDocument();
    expect(screen.getByText('Digital Agency Co.')).toBeInTheDocument();
    expect(screen.getByText('StartUp Hub')).toBeInTheDocument();
  });

  it('displays role descriptions', () => {
    render(<Experience />);
    expect(screen.getByText(/Leading Frontend architecture for enterprise business products/)).toBeInTheDocument();
    expect(screen.getByText(/Leading Frontend architecture for business products/)).toBeInTheDocument();
    expect(screen.getByText(/Developed and maintained web applications/)).toBeInTheDocument();
    expect(screen.getByText(/Built responsive web interfaces/)).toBeInTheDocument();
  });

  it('displays React technology tag for all experiences', () => {
    render(<Experience />);
    const reactTags = screen.getAllByText('React');
    expect(reactTags.length).toBeGreaterThanOrEqual(4);
  });

  it('displays TypeScript tag for relevant experiences', () => {
    render(<Experience />);
    const typescriptTags = screen.getAllByText('TypeScript');
    expect(typescriptTags).toHaveLength(2);
  });

  it('displays NextJS tag for relevant experiences', () => {
    render(<Experience />);
    const nextjsTags = screen.getAllByText('NextJS');
    expect(nextjsTags).toHaveLength(2);
  });

  it('displays GraphQL tag for relevant experiences', () => {
    render(<Experience />);
    const graphqlTags = screen.getAllByText('GraphQL');
    expect(graphqlTags).toHaveLength(2);
  });

  it('displays Node.js tag for Full Stack Developer role', () => {
    render(<Experience />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('displays MongoDB tag for Full Stack Developer role', () => {
    render(<Experience />);
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  it('displays Express tag for Full Stack Developer role', () => {
    render(<Experience />);
    expect(screen.getByText('Express')).toBeInTheDocument();
  });

  it('displays JavaScript tag for Junior Developer role', () => {
    render(<Experience />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('displays CSS and Git tags for Junior Developer role', () => {
    render(<Experience />);
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<Experience />);
    const section = container.querySelector('#experience');
    expect(section).toBeInTheDocument();
  });

  it('renders timeline structure with glow effect', () => {
    const { container } = render(<Experience />);
    const timeline = container.querySelector('.timeline-glow');
    expect(timeline).toBeInTheDocument();
  });

  it('renders timeline dots for each experience', () => {
    const { container } = render(<Experience />);
    const dots = container.querySelectorAll('.rounded-full.bg-primary');
    expect(dots.length).toBeGreaterThanOrEqual(4);
  });

  it('applies glass effect styling to experience cards', () => {
    const { container } = render(<Experience />);
    const glassCards = container.querySelectorAll('.glass');
    expect(glassCards.length).toBeGreaterThanOrEqual(4);
  });

  it('displays current experience with special indicator', () => {
    const { container } = render(<Experience />);
    const pulsingElement = container.querySelector('.animate-pulse');
    expect(pulsingElement).toBeInTheDocument();
  });

  it('renders technologies as tags with proper styling', () => {
    const { container } = render(<Experience />);
    const techTags = container.querySelectorAll('.bg-primary\\/10.text-primary');
    expect(techTags.length).toBeGreaterThan(0);
  });

  it('has responsive grid layout', () => {
    const { container } = render(<Experience />);
    const gridItems = container.querySelectorAll('.md\\:grid-cols-2');
    expect(gridItems.length).toBeGreaterThanOrEqual(4);
  });
});