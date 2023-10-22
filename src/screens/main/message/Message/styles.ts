import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.grey6,
  },
  body: {
    flex: 1,
    backgroundColor: colors.grey6,
    padding: normalize(30),
  },
  footer: {
    width: '100%',
    height: normalize(56),
    backgroundColor: colors.white,
  },
  viewFooter: {
    width: '100%',
    height: 'auto',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  containerScrollView: {
    height: 'auto',
    backgroundColor: colors.grey6,
  },
  viewRow: {
    flexDirection: 'row',
  },
  profileImage: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(26),
    marginEnd: normalize(6),
  },
  viewText: {
    left: normalize(-14),
  },
  user: {
    alignItems: 'flex-end',
  },
  notuser: {
    alignItems: 'flex-start',
  },
  bubbleUser: {
    width: 'auto',
    maxWidth: normalize(600),
    borderRadius: normalize(15),
    marginVertical: normalize(5),
    padding: normalize(12),
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    backgroundColor: colors.bubbleUserBackground,
  },
  bubbleNotUser: {
    width: 'auto',
    maxWidth: normalize(600),
    borderRadius: normalize(15),
    marginVertical: normalize(5),
    padding: normalize(12),
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    backgroundColor: colors.bubbleNotUserBackground,
  },
  textUser: {
    width: 'auto',
    maxWidth: normalize(200),
    flexWrap: 'wrap',
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(12),
    color: colors.background,
  },
  textNotUser: {
    width: 'auto',
    maxWidth: normalize(200),
    flexWrap: 'wrap',
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(12),
  },
  viewTime: {
    width: 'auto',
  },
  textTimeUser: {
    fontSize: normalize(8),
    fontFamily: fontFamilySetup.regular,
    marginBottom: normalize(18),
    alignSelf: 'flex-end',
    color: colors.black,
  },
  textTimeNotUser: {
    fontSize: normalize(8),
    fontFamily: fontFamilySetup.regular,
    marginBottom: normalize(18),
    alignSelf: 'flex-start',
    color: colors.black,
  },
  iconBack: {
    color: colors.black,
  },
  iconCall: {
    color: colors.black,
  },
  iconVideocam: {
    color: colors.black,
  },
  viewBackgroundEmoji: {
    flex: 1,
    width: '100%',
    height: normalize(340),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewClearAll: {
    width: '100%',
    alignItems: 'center',
    marginVertical: normalize(6),
  },
  btnArrowDown: {
    borderRadius: normalize(100),
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: normalize(120),
    right: normalize(10),
    backgroundColor: colors.white,
  },
  btnClearAll: {
    width: normalize(80),
    backgroundColor: colors.white,
    marginBottom: normalize(6),
  },
  textClearAll: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
    color: colors.red,
    textAlign: 'center',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(14),
    marginVertical: normalize(16),
  },
  leftIcon: {
    transform: [{rotate: '40deg'}],
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    right: normalize(-10),
  },
  rightIconLeft: {
    position: 'absolute',
    right: normalize(20),
  },
  rightIconRight: {
    position: 'absolute',
    left: normalize(5),
  },
  textInput: {
    width: Device.getDeviceHeight() * 0.32,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    paddingVertical: normalize(12),
    paddingStart: normalize(16),
    paddingEnd: normalize(48),
    borderWidth: normalize(1),
    borderColor: colors.blackDefault,
    borderRadius: normalize(25),
    marginVertical: normalize(5),
  },
  textInputHeightAuto: {
    height: normalize(50),
  },
  textInputHeightAutoLimit: {
    maxHeight: 'auto',
  },
  viewFocus: {
    height: Device.getDeviceHeight() - 510,
  },
  viewBlur: {
    height: normalize(60),
  },
  viewFocusSelectImage: {
    height: Device.getDeviceHeight() - 690,
  },
  viewEmoji: {
    height: normalize(460),
  },
  btnPB: {
    paddingBottom: normalize(36),
  },
  modalContainer: {
    width: '100%',
    height: '88%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  avatarContainer: {
    width: normalize(130),
    height: normalize(90),
    backgroundColor: 'rgba(256, 256, 256, 1)',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    paddingTop: normalize(16),
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(16),
  },
  textStyle: {
    fontSize: normalize(16),
    marginLeft: normalize(12),
    color: colors.blackDefault,
    fontFamily: fontFamilySetup.bold,
  },
  iconStyle: {
    backgroundColor: colors.grey5,
    padding: normalize(8),
    borderRadius: normalize(1000),
  },
}));

export default useStyles;