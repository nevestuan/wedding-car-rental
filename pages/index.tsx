import React from 'react';
import styled from 'styled-components';

import { HeroBanner, InfoSection } from '@features/homepage/components';

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default function Home() {
  return (
    <StyledLayout>
      <HeroBanner />
      <InfoSection
        title="Uy Tín"
        backgroundImg="/img/info-section-image-1.jpg"
      />
      <InfoSection
        title="Chuyên Nghiệp"
        backgroundImg="/img/info-section-image-2.jpg"
        reverse
      />
    </StyledLayout>
  );
}
