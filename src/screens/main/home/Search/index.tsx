import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {
  getListComic,
  getDetailComic,
  getDataByTopic,
  getDataAllChapter,
  getDataDetailChapter,
} from '../../../../redux/selectors/comic.selector';
import {ComicActions, TopicActions} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {backScreen} from '../../../../utils';
import {getListTopic} from '../../../../redux/selectors/topic.selector';
import {TopicType} from '../../../../redux';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataComic = useAppSelector(getListComic);
  const dataTopic = useAppSelector(getListTopic);
  const dataComicDetail = useAppSelector(getDetailComic);
  const dataByTopic = useAppSelector(getDataByTopic);

  const dataChapter = useAppSelector(getDataAllChapter);

  const dataDetailChapter = useAppSelector(getDataDetailChapter);

  const styles = useStyles();
  const [search, setSearch] = useState('');

  const handlePressSearch = () => {
    NavigationService.navigate(routes.TOPICS);
  };
  const handlePress = (id: string) => {
    dispatch(ComicActions.getDetailComic(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => backScreen()}>
          <Icon
            name="arrow-back"
            type="ionicon"
            size={24}
            color={styles.backIcon.color}
          />
        </TouchableOpacity>
        <View style={styles.search}>
          <SearchCustom
            setValue={setSearch}
            value={search}
            onPress={handlePressSearch}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch(
            ComicActions.getListChapter('2b79b1a0-9251-410b-9db5-6ebc7e700c18'),
          )
        }>
        <Text style={{fontSize: 40}}>GETCHAPTER</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => dispatch(TopicActions.getListTopic())}>
        <Text style={{fontSize: 40}}>GETTOPIC</Text>
      </TouchableOpacity> */}
      <Text>{JSON.stringify(dataChapter)}</Text>
    </View>
  );
};

export default Search;
