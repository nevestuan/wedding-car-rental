import React from 'react';
import styled from 'styled-components';
import { Button, Space } from 'antd';

const StyledHeroBanner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/img/banner-2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media only screen and (max-width: 360px) {
    height: 70vh;
  }
`;

const StyledTextBanner = styled.div`
  text-transform: uppercase;
  text-align: center;
  border: 10px solid #e8e6e6;
  padding: 50px;

  h1 {
    font-size: 70px;
    letter-spacing: 5px;
  }

  h1,
  h3 {
    color: #e8e6e6;
    font-weight: bold;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
  }

  .cta-button {
    margin-top: 16px;
  }

  @media only screen and (max-width: 360px) {
    padding: 10px;
    border: 5px solid #fff;

    h1 {
      font-size: 25px;
      letter-spacing: 2px;
    }
  }
`;

export const HeroBanner: React.FC = () => {
  return (
    <StyledHeroBanner>
      <StyledTextBanner>
        <h1>Xe Hoa Hạnh Phúc</h1>
        <h3>Chuyên dịch vụ xe hoa, hoa cưới, uy tín, trách nhiệm</h3>

        <Space className="cta-button">
          <Button size="large" type="primary" ghost>
            TÌM HIỂU
          </Button>
          <Button size="large" type="primary">
            ĐẶT XE
          </Button>
        </Space>
      </StyledTextBanner>
    </StyledHeroBanner>
  );
};
