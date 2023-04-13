import React from 'react';

import Box from '@/shared/components/Layouts/Box';
import Text from '@/shared/components/Typography/Text';
import { Colors, Spaces } from '@/shared/types/commons';
import {
  BorderVariants,
  JustifyContents,
} from '@/shared/components/Layouts/types';
import Section from '@/shared/components/Layouts/Section';
import Container from '@/shared/components/Layouts/Container';
import Flex from '@/shared/components/Layouts/Flex';

const Footer = () => {
  return (
    <Section
      testId="footer-section"
      bgColor={Colors.BLACK}
      padding={{ top: Spaces.LARGE, bottom: Spaces.LARGE }}
      border={{ variant: BorderVariants.BASE_TOP, color: Colors.DARKER_LIGHT }}
    >
      <Container>
        <Flex justifyContent={JustifyContents.BETWEEN}>
          <Box>
            <Text color={Colors.LIGHTER_DARK}>
              Copyright © 2023 PromptCraft Labs Inc.
            </Text>
          </Box>
          <Box>
            <Flex justifyContent={JustifyContents.END}>
              <Text color={Colors.LIGHTER_DARK}>Terms of services</Text>
              <Text color={Colors.LIGHTER_DARK}>Privacy policy</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;
