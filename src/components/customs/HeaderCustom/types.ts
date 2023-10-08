import {TextStyle, ViewProps, ViewStyle} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};

export type HeaderImage = {
  uri?: string;
};

export type CustomHeaderProps = {
  viewStyle?: ViewStyle;
  title?: string; // Tiêu đề
  titleStyle?: TextStyle;
  leftIcon?: HeaderIcon; // Icon bên trái
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  onPressRightIconMiddle?: () => void;
  rightIconleft?: HeaderIcon; // Icon bên phảir
  rightIconMiddle?: HeaderIcon; // Icon bên phảir
  rightIconRight?: HeaderIcon; // Icon bên phảir
  imageUri?: HeaderImage;
  fullName?: string;
  userStatus?: string;
};
