import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 160px;
  height: 70px;
  margin-right: 15px;
  padding: 10px;

  border-radius: 5px;
  box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.3);
  background-color: white;

  :last-child {
    margin-right: 0px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
