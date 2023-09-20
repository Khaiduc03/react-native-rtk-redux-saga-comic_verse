import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },

  body: {
    flex: 1,
    padding: normalize(24),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  textOTP: {
    width: normalize(46),
    height: normalize(46),
    borderWidth: normalize(1.5),
    borderColor: colors.black,
    borderRadius: normalize(6),
    margin: normalize(14),
    textAlign: 'center',
    fontSize: normalize(12),
    color: colors.black,
  },
  text3: {
    marginVertical: normalize(16),
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  text4: {
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  text5: {
    color: colors.primary,
    fontFamily: 'Urbanist',
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  textCT: {
    fontFamily: 'Urbanist',
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  viewBottom: {
    flex: 0.93,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContinue: {
    marginHorizontal: normalize(24),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(18),
    backgroundColor: colors.primary,
    shadowColor: 'rgba(248, 147, 0, 0.25)',
    shadowOffset: {
      width: normalize(4),
      height: normalize(8),
    },
    shadowRadius: normalize(24),
    shadowOpacity: normalize(1),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(10),
    alignSelf: 'stretch',
  },
  textContinue: {
    color: colors.secondary,
    textAlign: 'center',
    fontFamily: 'Urbanist',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
}));
export default useStyles;