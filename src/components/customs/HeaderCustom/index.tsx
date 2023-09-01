import {View, Text} from 'react-native';
import {Header, Icon} from '@rneui/base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import {CustomHeaderProps} from './types';
import useStyles from './styles';

const HeaderCustom: React.FunctionComponent<CustomHeaderProps> = props => {
  const styles = useStyles();
  return (
    <Header
      barStyle="dark-content"
      centerComponent={
        <Text style={[props.titleStyle, styles.textTitle]}>{props.title}</Text>
      }
      centerContainerStyle={{justifyContent: 'center'}}
      containerStyle={styles.container}
      leftComponent={
        <TouchableOpacity onPress={props.onPressLeftIcon}>
          {props.leftIcon?.name && (
            <Icon
              type={props.leftIcon.type}
              name={props.leftIcon.name}
              size={30}
              color={styles.leftIcon.color}
            />
          )}
        </TouchableOpacity>
      }
      leftContainerStyle={{justifyContent: 'center'}}
      linearGradientProps={{}}
      placement="left"
      rightComponent={
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.rightIconLeft}>
            {props.rightIconleft?.name && (
              <Icon
                type={props.rightIconleft?.type}
                size={24}
                name={props.rightIconleft?.name}
                color={styles.rightIcon.color}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            {props.rightIconRight?.name && (
              <Icon
                type={props.rightIconRight?.type}
                color={styles.rightIcon.color}
                size={24}
                name={props.rightIconRight?.name}
              />
            )}
          </TouchableOpacity>
        </View>
      }
      rightContainerStyle={{justifyContent: 'center'}}
      hideStatusBar={true}
      backgroundColor="transparent"
    />
  );
};
export default HeaderCustom;