// @flow
import {styled} from 'baseui';
import CONFIG from '../config/style';

const List = styled('ol', {
  listStyle: 'none',
  padding: 0,
  position: 'relative',
});

const More = styled('span', ({$theme}) => ({
  color: CONFIG.COLORS.LIGHTBLUE,
  marginLeft: $theme.sizing.scale1600,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}));

export {List, More};
