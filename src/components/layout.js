// @flow
import {styled} from 'baseui';

const Container = styled('main', ({$theme}) => ({
  margin: `${$theme.sizing.scale800} auto`,
  maxWidth: '1200px',
  padding: `0 ${$theme.sizing.scale800}`,
}));

export {Container};
