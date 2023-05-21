import styled from '@emotion/styled';

export const Card = styled.div`
  width: 200px;
  height: 270px;

  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  border: 1px solid teal;
  border-radius: 5px;

  background-color: white;
`;

export const CardDescription = styled.div`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const Avatar = styled.img`
  display: block;
  height: 100px;
  width: 100px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  border-radius: 50%;
  background-color: black;
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  padding: 0;
  margin-top: 0;

  border-top: 1px solid teal;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const Quantity = styled.span`
  color: teal;
`;
