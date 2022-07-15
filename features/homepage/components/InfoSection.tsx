import { Button } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  reverse?: boolean;
  backgroundImg: string;
}

const StyledInfoSection = styled.div`
  display: flex;
  height: 400px;
  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
  .description {
    width: 33%;
    flex: 0 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 32px 0;

    .title {
      font-size: 46px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .subtitle {
      font-size: 32px;
    }

    .cta-button {
      margin-top: 32px;
    }
  }

  .image {
    border: 16px solid #e8e6e6;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen and (max-width: 360px) {
    height: auto;
    flex-direction: column;
    .description {
      width: 100%;
      height: auto;
    }

    .image {
      flex: 1 0 auto;
      height: 200px;
    }
  }
`;

export const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  reverse,
  backgroundImg,
}) => {
  return (
    <StyledInfoSection reverse={reverse} backgroundImg={backgroundImg}>
      <div className="description">
        <div className="title">{title}</div>
        {subtitle && <div className="subtitle">{subtitle}</div>}
        <Button className="cta-button" type="primary">
          Đặt Xe
        </Button>
      </div>
      <div className="image" />
    </StyledInfoSection>
  );
};
