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
          mb={10}
          transform="uppercase"
        >
          What a kind of work
          <br /> do you do?
        </Heading>
        <Flex direction={{ initial: 'col', md: 'row' }} gap={4} p={4}>
          <Box width={{ initial: 'full', md: '3/12' }} height="min">
            <LinkCard
              title="Software developer"
              subTitle="Help me make great software"
              src={softwareDeveloper}
              alt="Young girl coding"
              href="/assistant/software-developer"
            />
          </Box>
          <Box
            width={{ initial: 'full', md: '3/12' }}
            height="min"
            positions="relative"
          >
            <LinkCard
              title="UX/UI Designer"
              subTitle="Help me design beautiful app"
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
              subTitle="Advise me professional writings"
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
      </Container>
    </Section>
  );
};

export default AiAssistantSection;
