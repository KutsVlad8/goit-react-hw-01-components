import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0 10px #c6cccced;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 370px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 370px;

  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: inherit;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const Procentage = styled.span`
  font-size: 18px;
  font-weight: 400;
`;
