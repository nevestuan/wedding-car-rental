import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

export interface CardItemProps {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
}

const StyledCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  text-align: center;

  .card-image {
    border-radius: 50%;
    margin: 0 auto;
  }
  .card-title {
    margin-top: 24px;
  }
`;

export const CardItem: React.FC<CardItemProps> = ({
  className,
  imageSrc,
  title,
  description,
}) => {
  return (
    <StyledCardItem className={className}>
      <Image
        src={imageSrc}
        className="card-image"
        alt={title}
        width={121}
        height={121}
      />
      <Title level={3} className="card-title">
        {title}
      </Title>
      <Text className="card-description">{description}</Text>
    </StyledCardItem>
  );
};
