import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ReadMore from './components/ReadMore';
import {HeaderCustom} from '../../../../../../components';
import {useAppSelector} from '../../../../../../hooks';
import {getDetailComic} from '../../../../../../redux/selectors/comic.selector';
import {ComicType} from '../../../../../../redux';

interface Comic {
  data: ComicType;
}

const Preview: React.FC<Comic> = props => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>Describe:</Text>
        <Text style={styles.textDescribe}>{props.data.description}</Text>
      </View>
      <View>
        <HeaderCustom titleStyle={styles.textTitle} title="Read more" />
        <ReadMore />
      </View>
    </View>
  );
};

export default Preview;
