import { Layouts, Typography } from '@/shared/components';

const { Container, Section } = Layouts;
const { HeroHeadline, HeroTagline } = Typography;

export default function Home() {
  return (
    <Section data-testid="hero-section" bgColor="dark-primary">
      <Container>
        <div className="flex h-[40rem] flex-col justify-center lg:w-[500px]">
          <div>
            <HeroHeadline color="white">
              Unlock your creativity with PromptCraft.
            </HeroHeadline>
            <HeroTagline color="white">
              Unleash your imagination with our curated prompts
            </HeroTagline>
          </div>
        </div>
      </Container>
    </Section>
  );
}
