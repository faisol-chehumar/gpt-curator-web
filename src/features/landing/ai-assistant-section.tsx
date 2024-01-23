import Link from 'next/link';

import softwareDeveloper from '../../../public/images/software-developer.png';
import uxuiDesigner from '../../../public/images/graphic-designer.png';
import investor from '../../../public/images/investor.png';
import generalAssistant from '../../../public/images/general-assistant.png';

import { Box, Container, Flex, Heading, Section } from '@/components/ui';
import { ImageCard } from '@/components';

const AiAssistantSection = () => {
  return (
    <Section id="ai-assistance-section" py={16}>
      <Container>
        <Heading
          variant="h4"
          align="center"
          weight="bold"
          mb={16}
          transform="uppercase"
        >
          What a kind of work
          <br /> do you do?
        </Heading>
      </Container>
      <Flex direction={{ initial: 'col', md: 'row' }} gap={4} p={4}>
        <Box width={{ initial: 'full', md: '3/12' }} height="min">
          <Link href="/assistant/software-developer">
            <ImageCard
              src={softwareDeveloper}
              alt="Young girl coding"
              caption="Software developer"
            />
          </Link>
        </Box>
        <Box
          width={{ initial: 'full', md: '3/12' }}
          height="min"
          positions="relative"
        >
          <ImageCard
            src={uxuiDesigner}
            alt="Young girl drawing"
            caption="UX/UI Designer"
          />
        </Box>
        <Box
          width={{ initial: 'full', md: '3/12' }}
          height="min"
          positions="relative"
        >
          <ImageCard
            src={investor}
            alt="Man show his dashboard"
            caption="Investor"
          />
        </Box>
        <Box
          width={{ initial: 'full', md: '3/12' }}
          height="min"
          positions="relative"
        >
          <ImageCard
            src={generalAssistant}
            alt="Old man typing"
            caption="General Assistant"
          />
        </Box>
      </Flex>
    </Section>
  );
};

export default AiAssistantSection;
