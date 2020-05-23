import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  height: 50%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #a44a3f;
    font-size: 2em;
    margin-bottom: 20px;
  }

  input {
    background: none;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    outline: none;

    font-size: 24px;

    margin-bottom: 40px;

    border-bottom: 2px solid ${({ theme }) => theme.colors.text}75;

    &::placeholder {
      opacity: 0.5;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      width: 220px;
      border-radius: 23px;
      padding: 9px 32px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 24px;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 24px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
