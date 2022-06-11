import React from 'react';
import styled from 'styled-components';

import { HeroBanner } from '@features/homepage/components';

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default function Home() {
  return (
    <StyledLayout>
      <HeroBanner />
    </StyledLayout>
  );
}
