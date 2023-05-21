import { createColor } from '../utils/createColor';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Procentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Section>
      <Title>Upload stats</Title>

      <List>
        {stats.map(el => (
          <Item key={el.id} style={{ backgroundColor: createColor() }}>
            <Label>{el.label} </Label>
            <Procentage>{el.percentage}%</Procentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

//  {
//    unreadMessages.length > 0 && (
//      <h2>У вас {unreadMessages.length} непрочитанных сообщений.</h2>
//    );
//  }
