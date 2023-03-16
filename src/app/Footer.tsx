import React from 'react';

import Box from '@/shared/components/Layouts/Box';
import Text from '@/shared/components/Typography/Text';
import { Colors, Sizes, Spaces } from '@/shared/types/commons';
import { BorderVariants } from '@/shared/components/Layouts/types';
import Section from '@/shared/components/Layouts/Section';
import Container from '@/shared/components/Layouts/Container';
import Flex from '@/shared/components/Layouts/Flex';

const Footer = () => {
  return (
    <Section
      testId="footer-section"
      bgColor={Colors.BLACK}
      paddingY={Spaces.LARGE}
      border={{ variant: BorderVariants.BASE_TOP, color: Colors.DARKER_LIGHT }}
    >
      <Container>
        <Flex>
          <Box>
            <Text color={Colors.LIGHTER_DARK}>
              Copyright © 2023 PromptCraft Labs Inc.
            </Text>
          </Box>
          <Box>
            <Text color={Colors.LIGHTER_DARK}>Terms of services</Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;
