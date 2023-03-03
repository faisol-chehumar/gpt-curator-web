import { Container, Typography } from '@/shared/components';

const { HeroHeadline, HeroTagline } = Typography;

export default function Home() {
  return (
    <section
      data-testid="hero-section"
      className="min-w-full bg-dark-primary text-white"
    >
      <Container>
        <div className="flex h-[40rem] flex-col justify-center lg:w-[500px]">
          <div>
            <HeroHeadline>
              Unlock your creativity with PromptCraft.
            </HeroHeadline>
            <HeroTagline>
              Unleash your imagination with our curated prompts
            </HeroTagline>
          </div>
        </div>
      </Container>
    </section>
  );
}
