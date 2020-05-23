import styled from "styled-components";

import searchIcon from "../../assets/search.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 90px 0 94px;
  height: 158px;
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
`;

export const Search = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #fefefe;
  color: ${({ theme }) => theme.colors.text};
  height: 37px;
  width: 362.39px;

  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 441px;
  height: 46px;
`;

export const Button = styled.button`
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  border-radius: 23px;

  width: ${(props) => (props.docs ? "228px" : "168px")};
`;
