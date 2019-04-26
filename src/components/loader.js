// @flow
import {styled} from 'baseui';
import CONFIG from '../config/style';

const Loader = styled('div', ({$theme}) => ({
  animationIterationCount: 'infinite',
  animationDuration: '0.5s',
  animationName: {
    from: {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    to: {
      transform: 'translate(-50%, -50%) rotate(360deg)',
    },
  },
  animationTimingFunction: 'linear',
  borderBottomColor: 'transparent',
  borderLeftColor: CONFIG.COLORS.LIGHTBLUE,
  borderRadius: '100%',
  borderRightColor: CONFIG.COLORS.LIGHTBLUE,
  borderStyle: 'solid',
  borderTopColor: 'transparent',
  borderWidth: $theme.sizing.scale100,
  height: $theme.sizing.scale1000,
  left: '50%',
  position: 'absolute',
  top: '50%',
  width: $theme.sizing.scale1000,
}));

export default Loader;
