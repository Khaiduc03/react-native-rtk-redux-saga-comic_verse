import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    paddingHorizontal: normalize(12),
  },
  colorIconSetting: {
    color: colors.black,
  },
  viewItem: {
    padding: normalize(9),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewRowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewIcon: {
    width: normalize(63),
    height: normalize(63),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(100),
    marginEnd: normalize(12),
    marginBottom: normalize(8),
  },
  textTitle: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    marginBottom: normalize(10),
  },
  text: {
    color: colors.grey3,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.medium,
  },
  viewText: {
    width: 'auto',
  },
  view: {
    width: normalize(2),
    height: normalize(16),
    backgroundColor: colors.grey3,
    marginHorizontal: normalize(12),
  },
  textDescription: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.regular,
    letterSpacing: normalize(0.25),
  },
  outter: {
    width: normalize(53),
    height: normalize(26),
    borderRadius: normalize(15),
    backgroundColor: colors.grey5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(2),
  },
  off: {
    justifyContent: 'flex-start',
    backgroundColor: '#C8C8C8',
  },
  on: {
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
  },
  innerOFF: {
    width: normalize(18),
    height: normalize(18),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  innerON: {
    width: normalize(18),
    height: normalize(18),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  textSettings: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.25),
  },
  viewItemSettings: {
    marginLeft: normalize(16),
    marginTop: normalize(36),
    justifyContent: 'space-between',
  },
  viewStart: {
    marginLeft: normalize(16),
  },
}));

export default useStyles;