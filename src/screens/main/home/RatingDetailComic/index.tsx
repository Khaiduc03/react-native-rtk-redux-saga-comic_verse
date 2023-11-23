import {AirbnbRating} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';

const RatingDetailComic: React.FC = () => {
  const styles = useStyles();

  const handleGoback = () => {
    NavigationService.goBack();
  };
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };
  const [inputText, setInputText] = useState('');
  const [isTextInputEmpty, setIsTextInputEmpty] = useState(true);
  const maxCharacters = 500;

  const handleTextChange = (text: string) => {
    setIsTextInputEmpty(text.trim() === '');
    if (text.length <= maxCharacters) {
      setInputText(text);
    }
  };
  const handleSend = () => {
    if (isTextInputEmpty) {
      Alert.alert('Failed', 'Please enter text before sending rating');
    } else {
      Alert.alert('Success', 'Thanks for your rating');
    }
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Solo Leveling"
        rightIconRight={{
          name: 'cloud-upload-outline',
          type: 'ionicon',
        }}
        onPressLeftIcon={handleGoback}
        onPressRightIconRight={handleSend}
      />
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://media.baoquangninh.vn/upload/image/202309/medium/2122032_4265a4a6e7ba65752201d10852302e01.jpg',
          }}
        />
        <View style={{gap: 5}}>
          <Text style={styles.nameUser}>Ronaldo</Text>
          <Text style={styles.description}>
            Edits are public unless you delete the review.
            <TouchableOpacity>
              <Text style={styles.detailMore}>Find out more</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <AirbnbRating
        defaultRating={0}
        selectedColor="#FFC911"
        showRating={false}
        size={26}
        starContainerStyle={styles.star}
        ratingContainerStyle={styles.viewstar}
        onFinishRating={ratingCompleted}
      />
      <View style={styles.footer}>
        <TextInput
          textAlignVertical="top"
          multiline
          style={styles.textInput}
          placeholder="Please update app"
          value={inputText}
          onChangeText={handleTextChange}
        />
        <Text
          style={
            styles.countText
          }>{`${inputText.length}/${maxCharacters}`}</Text>
      </View>
    </View>
  );
};

export default RatingDetailComic;