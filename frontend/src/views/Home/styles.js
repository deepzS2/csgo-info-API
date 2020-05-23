import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  padding: 0 94px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ServerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;

  width: 271px;
  height: 513px;
`;

export const ServerName = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const Welcome = styled.h3`
  font-size: 24px;
  font-weight: 400;
  float: right;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 94px 0 0;

  span {
    font-weight: 900;
  }
`;

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 352px;
  width: 271px;
  padding: 35px 28px 65px 33px;
`;

export const Text = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
