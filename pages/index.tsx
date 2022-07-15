import React from 'react';
import styled from 'styled-components';

import {
  HeroBanner,
  InfoSection,
  CardListSection,
} from '@features/homepage/components';

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
      <CardListSection
        title="Dịch Vụ"
        subtitle="Chúng tôi hân hạnh được phục vụ quý khách"
        backgroundType="white"
        cards={[
          {
            imageSrc: '/img/xe-co.webp',
            title: 'Xe Hoa',
            description:
              'Cho thuê các loại xe cưới từ bình dân đến cao cấp với giá cả hợp lí',
          },
          {
            imageSrc: '/img/bo-hoa.webp',
            title: 'Hoa Cưới',
            description: 'Nhận đặt hoa cưới trọn gói theo yêu cầu',
          },
          {
            imageSrc: '/img/xe-bus.webp',
            title: 'Xe Cưới',
            description: 'Nhận sắp xếp xe chở khách đám cưới',
          },
        ]}
      />
    </StyledLayout>
  );
}
