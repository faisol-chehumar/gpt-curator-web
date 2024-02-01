import softwareDeveloper from '../../../public/images/software-developer.png';
import uxuiDesigner from '../../../public/images/graphic-designer.png';
import investor from '../../../public/images/investor.png';
import generalAssistant from '../../../public/images/general-assistant.png';

import { Box, Container, Flex, Heading, Section } from '@/components/ui';
import { LinkCard } from '@/components';

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
          <LinkCard
            title="Software developer"
            subTitle="Help me make great software"
            href="/assistant/software-developer"
            src={softwareDeveloper}
            alt="Young girl coding"
          />
        </Box>
        <Box
          width={{ initial: 'full', md: '3/12' }}
          height="min"
          positions="relative"
        >
          <LinkCard
            title="UX/UI Designer"
            subTitle="Help me make great software"
            src={uxuiDesigner}
            alt="Young girl drawing"
            href="/assistant/software-developer"
          />
        </Box>
        <Box
          width={{ initial: 'full', md: '3/12' }}
          height="min"
          positions="relative"
        >
          <LinkCard
            title="Investor"
            subTitle="Help me make great software"
            src={investor}
            alt="Man show his dashboard"
            href="/assistant/software-developer"
          />
        </Box>
        <Box
          width={{ initial: 'full', md: '3/12' }}
          height="min"
          positions="relative"
        >
          <LinkCard
            title="General Assistant"
            subTitle="Help me make great software"
            src={generalAssistant}
            alt="Old man typing"
            href="/assistant/software-developer"
          />
        </Box>
      </Flex>
    </Section>
  );
};

export default AiAssistantSection;
