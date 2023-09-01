import {TextStyle, ViewProps, ViewStyle} from 'react-native';
export type CustomTopicsProps = {
  title?: string;
  image?: string;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
  onPress?: () => void;
};