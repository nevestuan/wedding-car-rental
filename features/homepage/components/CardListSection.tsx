import { Button } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';

import { CardItemProps, CardItem } from './CardItem';

interface CardListSectionProps {
  className?: string;
  title: string;
  subtitle: string;
  cards: CardItemProps[];
  backgroundType?: 'grey' | 'white';
}

const StyledCardListSection = styled.div<CardListSectionProps>`
  padding: 64px 16px;
  background-color: ${(props) =>
    props.backgroundType === 'grey' ? `rgba(232, 230, 230, 0.8)` : 'white'};

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 46px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  .subtitle {
    font-size: 24px;
    text-align: center;
  }

  .card-list {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;

    .card-list-item {
      display: flex;
      justify-content: center;
    }
  }
`;

export const CardListSection: React.FC<CardListSectionProps> = ({
  className,
  title,
  subtitle,
  cards,
  backgroundType,
}) => {
  return (
    <StyledCardListSection
      className={className}
      backgroundType={backgroundType}
    >
      <div className="header">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
      <Row className="card-list" gutter={[32, 32]}>
        {cards.map((item) => (
          <Col className="card-list-item" key={item.title} xs={24} md={8}>
            <CardItem {...item} />
          </Col>
        ))}
      </Row>
    </StyledCardListSection>
  );
};
