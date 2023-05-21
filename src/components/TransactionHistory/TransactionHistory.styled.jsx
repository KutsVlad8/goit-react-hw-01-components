import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  margin-bottom: 40px;

  border: 1px solid black;
  border-collapse: collapse;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.4);
`;
export const THead = styled.thead`
  background-color: rgb(36, 168, 220);
`;
export const HeadTh = styled.th`
  padding: 15px;
`;
export const TBody = styled.tbody``;

export const BodyTr = styled.tr`
  text-align: center;

  :nth-of-type(odd) {
    background-color: rgb(242, 246, 247);
  }

  :nth-of-type(even) {
    background-color: rgb(170, 213, 231);
  }
`;
export const BodyTd = styled.td`
  padding: 10px;
`;
