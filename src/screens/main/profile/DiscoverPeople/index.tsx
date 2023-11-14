import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {ItemList} from './components';
import useStyles from './styles';

interface ListItem {
  id: string;
  avatarDummy: boolean;
  name: string;
  title: string;
  button: boolean;
  textButton: string;
  deleteUser: boolean;
}

const DiscoverPeople: React.FC = () => {
  const styles = useStyles();

  const [listData, setListData] = useState(initialData);

  const handleGoback = () => {
    NavigationService.goBack();
  };

  const refreshList = () => {
    const refreshedData = [...initialData];
    setListData(refreshedData);
    console.log('Refreshed Data Succesfully:', refreshList);
  };

  const renderItem = ({item}: {item: ListItem}) => <ItemList {...item} />;

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Discover People"
        onPressLeftIcon={handleGoback}
      />
      <View style={{padding: 24}}>
        <View style={styles.viewRefesh}>
          <Text style={styles.test}>Refresh list</Text>
          <Icon name="reload-outline" type="ionicon" onPress={refreshList} />
        </View>
      </View>
      <View style={{paddingHorizontal: 11}}>
        <Text style={styles.testContent}>Top Suggestions</Text>
        <View style={{paddingVertical: 20}}>
          <FlatList
            data={listData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            columnWrapperStyle={{gap: 10, paddingVertical: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default DiscoverPeople;
const initialData: ListItem[] = [
  {
    id: '1',
    avatarDummy: true,
    name: 'Peter 1',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    deleteUser: true,
  },
  {
    id: '2',
    avatarDummy: true,
    name: 'Peter 2',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    deleteUser: true,
  },
  {
    id: '3',
    avatarDummy: true,
    name: 'Peter 3',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    deleteUser: true,
  },
  {
    id: '4',
    avatarDummy: true,
    name: 'Peter 4',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '5',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '6',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '7',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '8',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '9',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '10',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '11',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '12',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
  {
    id: '13',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    deleteUser: true,
    textButton: 'Follow',
  },
];
