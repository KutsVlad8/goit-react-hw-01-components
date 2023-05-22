import { createColor } from '../../utils/createColor';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Procentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title.length > 0 && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: createColor() }}>
            <Label>{label} </Label>
            <Procentage>{percentage}%</Procentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
