import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceWithScreen() * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  textTitle: {
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    lineHeight: normalize(35.2),
    color: colors.black,
  },
  leftIcon: {
    color: colors.primary,
  },
  rightIcon: {
    color: colors.black,
  },
  rightContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rightIconLeft: {
    marginRight: normalize(10),
  },
}));

export default useStyles;