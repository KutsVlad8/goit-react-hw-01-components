import { Item, Status, Avatar, Name } from './FriendsListItem.styled';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <Item key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
