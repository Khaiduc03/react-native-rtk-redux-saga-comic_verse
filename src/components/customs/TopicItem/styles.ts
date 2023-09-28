import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    marginLeft: normalize(15),
  },
  imgBackground: {
    justifyContent: 'flex-end',
  },
  textTitle: {
    fontSize: normalize(16),
    color: colors.white,
    fontFamily: fontFamilySetup.bold,
    fontStyle: 'normal',
    lineHeight: normalize(25.6),
  },
  containerProps: {
    marginLeft: normalize(15),
    marginBottom: normalize(15),
  },
}));

export default useStyles;