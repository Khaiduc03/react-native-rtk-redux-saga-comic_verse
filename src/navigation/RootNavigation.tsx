import { NavigationContainer } from '@react-navigation/native';
import { makeStyles, useThemeMode } from '@rneui/themed';
import React from 'react';
import { useAppSelector } from '../hooks';
import { getAuthEnableSignIn } from '../redux/selectors/auth.selector';
import { getMode } from '../redux/selectors/thems.selector';
import { navigationRef } from './NavigationService';

import Security from '../screens/main/profile/Security';
import AppNavigator from './navigators/AppNavigator';
import MyProfile from '../screens/main/profile/MyProfile';




const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  //theme
  const mode = useAppSelector(getMode);
  const { setMode } = useThemeMode();
  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <MyProfile />
    </NavigationContainer>
  );
};

export default RootNavigation;

const useStyles = makeStyles(({ colors }) => ({
  Mode: {
    backgroundColor: colors.background,
  },
}));
