import { Box, Container, Section, Text } from '@/components';

const Footer = () => {
  return (
    <Section id="footer-section" className="bg-[#0d1117]" borderTop py={6}>
      <Container>
        <Box>
          <Text align="center">Copyright © 2023 PromptCraft Labs Inc.</Text>
        </Box>
      </Container>
    </Section>
  );
};

export default Footer;
