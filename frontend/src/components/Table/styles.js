import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const TableContainer = styled.table`
  width: 854px;
  height: auto;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  th {
    background-color: ${({ theme }) => theme.colors.text};

    border-left: 3px solid ${({ theme }) => theme.colors.background};
    border-right: 3px solid ${({ theme }) => theme.colors.background};

    button {
      font-size: 36px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.background};
      background: none;
      border: none;
      outline: none;

      &.ascending::after {
        content: "👇";
        display: inline-block;
        margin-left: 1em;
      }

      &.descending::after {
        content: "☝️";
        display: inline-block;
        margin-left: 1em;
      }
    }
  }
`;

export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.primary};

  tr {
    height: 50px;
  }

  tr,
  td {
    border: none;
  }

  td {
    color: ${({ theme }) => theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;
