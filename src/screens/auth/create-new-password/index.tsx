import {StatusBar, TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/base';
import React, {useState} from 'react';
import {Headers, InputCustom} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {TextInput} from 'react-native-gesture-handler';
import {CheckBox} from '@rneui/themed';
import {Eye_avatar} from '../../../assets';

const CreateNewPassword = () => {
  const styles = useStyles();

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <StatusBar />
        <Headers
          leftIcon={true}
          onPressLeftIcon={() =>
            NavigationService.navigate(routes.FORGOT_PASSWORD)
          }
          style={styles.marginHeader}
        />
        <Text style={styles.textTitleFP}>Create New Password 🔐</Text>
        <Text style={styles.text1}>
          Enter your new password. If you forget it, then you have to do forgot
          password.
        </Text>
        <View>
          <Text style={styles.text2}>Password</Text>
          <TextInput style={styles.textInput} secureTextEntry />
          <Eye_avatar style={styles.eye} />
        </View>
        <View>
          <Text style={styles.text2}>Confirm Password</Text>
          <TextInput style={styles.textInput} secureTextEntry />
          <Eye_avatar style={styles.eye} />
        </View>
        <View style={styles.viewRow}>
          <View style={styles.checkBox}>
            <CheckBox
              style={styles.checkBox}
              checked={checked}
              onPress={toggleCheckbox}
            />
          </View>
          <Text style={styles.textRM}>Remember me</Text>
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.btnContinue}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateNewPassword;