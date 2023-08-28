import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 26,
    fontFamily: fontFamilySetup.bold,
    color: colors.divider,
  },
  textTopics: {
    color: colors.black,
  },
}));

export default useStyles;