import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  image: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: normalize(50),
  },
  content: {
    borderTopWidth: normalize(10),
    borderColor: colors.grey9,
    paddingVertical: normalize(21),
    backgroundColor: colors.white,
  },
  post: {
    paddingHorizontal: normalize(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTextPost: {
    width: '60%',
    marginStart: normalize(15),
    marginTop: normalize(3),
  },
  viewIconPost: {
    flexDirection: 'row',
    gap: normalize(13),
  },
  name: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(21),
  },
  createAt: {
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.regular,
    color: colors.grey8,
  },
  description: {
    padding: normalize(10),
  },
  textDescription: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
  imagePost: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  iconText: {
    flexDirection: 'row',
    gap: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
    width: '100%',
    alignItems: 'center',
  },
  viewNumberCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.4,
    paddingVertical: normalize(10),
    borderColor: colors.grey8,
  },
  textLike: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: normalize(15),
    flexDirection: 'row',
    left: normalize(170),
    alignSelf: 'center',
  },
  dotActive: {
    margin: normalize(3),
    color: colors.black,
  },
  dot: {
    margin: normalize(3),
    color: colors.white,
  },
  scrollView: {},
}));

export default useStyles;
