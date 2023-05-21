import {
  Card,
  CardDescription,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsListItem,
  Label,
  Quantity,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Card>
      <CardDescription>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </CardDescription>

      <StatsList>
        <StatsListItem>
          <Label>Followers </Label>
          <Quantity>{stats.followers} </Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsListItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
