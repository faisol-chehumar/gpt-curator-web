import { Container, Typography } from '@/shared/components';

const { HeroHeadline, HeroTagline } = Typography;

export default function Home() {
  return (
    <div
      data-testid="hero-section"
      className="min-h-screen min-w-full bg-dark-primary text-white"
    >
      <Container>
        <HeroHeadline>Unlock your creativity with PromptCraft.</HeroHeadline>
        <HeroTagline>
          Unleash your imagination with our curated prompts
        </HeroTagline>
      </Container>
    </div>
  );
}
