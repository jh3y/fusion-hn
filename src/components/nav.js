// @flow
import {styled, LightTheme} from 'baseui';
import CONFIG from '../config/style';

const Header = styled('header', {
  backgroundColor: CONFIG.COLORS.DARK,
  left: '0',
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'sticky',
  top: '0',
  width: '100%',
  zIndex: 2,
});

const headerFont = {
  cursor: 'pointer',
  lineHeight: LightTheme.sizing.scale900,
  textDecoration: 'none',
  textTransform: 'uppercase',
};

const NavHeader = styled('h1', ({$theme}) => ({
  ...$theme.typography.font450,
  ...headerFont,
  color: $theme.colors.mono100,
  fontWeight: 400,
  margin: 0,
}));

const NavOption = styled('span', ({$theme}) => ({
  ...$theme.typography.font350,
  ...headerFont,
  fontSize: $theme.sizing.scale500,
  color: $theme.colors.mono700,
  ':hover': {
    color: $theme.colors.mono100,
  },
}));

const NavItem = styled('div', ({$theme}) => ({
  marginLeft: $theme.sizing.scale400,
  '@media screen and (min-width: 480px)': {
    marginLeft: $theme.sizing.scale800,
  },
}));

export {Header, NavHeader, NavItem, NavOption};
