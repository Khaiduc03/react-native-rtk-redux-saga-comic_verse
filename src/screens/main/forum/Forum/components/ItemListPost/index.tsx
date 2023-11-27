import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Share from 'react-native-share';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageIcon} from '../../../../../../assets/svg';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {ForumActions, getAuthUserProfile} from '../../../../../../redux';
import {getListForum} from '../../../../../../redux/selectors/forum.selector';
import {ForumType} from '../../../../../../redux/types/forum.type';
import {Device} from '../../../../../../utils';
import useStyles from './styles';
import AutoHeightImage from 'react-native-auto-height-image';
import {LogBox} from 'react-native';

const ItemListPost: React.FC = () => {
  const dispatch = useAppDispatch();

  const dataAPI = useAppSelector(getListForum);

  const user = useAppSelector(getAuthUserProfile);

  const [page, setPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [activeIndices, setActiveIndices] = useState({}) as any;
  const [selectedImage, setSelectedImage] = useState(null) as any;

  const {width, height} = Dimensions.get('window');

  const screenWidth = Dimensions.get('window').width;

  // console.log('datahihi: ', dataAPI);

  const openModal = (image: any) => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    dispatch(ForumActions.handleGetListData(page));
  }, []);

  const scale = new Animated.Value(1);

  const onGestureEvent = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  const onHandleState = (event: GestureEvent) => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleScroll = (id: any) => (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndices((prevIndices: any) => ({...prevIndices, [id]: index}));
  };

  const onShare = async () => {
    const options: any = {
      url: 'https://ComicVerse.com',
      message: 'ComicVerse app đọc truyện tích hợp mạng xã hội ^__^ ! : \n',
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikePress = (forum_uuid: any) => {
    dispatch(ForumActions.handleLike_UnlikeSuccess(forum_uuid));
  };

  const WIDTH = Device.getDeviceWidth();

  const [imageSizes, setImageSizes] = useState<{
    [key: string]: {width: number; height: number};
  }>({});

  LogBox.ignoreLogs(['ReactImageView: Image source "null" doesn\'t exist']);

  const styles = useStyles();

  const renderItem = ({item}: {item: ForumType}) => (
    <View style={styles.content}>
      <View>
        <View style={styles.post}>
          <View style={[styles.viewRow, styles.viewImageText]}>
            <Image
              style={styles.imageTitle}
              source={{
                uri: item.user_avatar || undefined,
              }}
            />
            <View style={styles.viewTextPost}>
              <Text style={styles.name}>
                {item.user_fullname || 'Anonymus'}
              </Text>
              <View
                style={[
                  styles.viewRow,
                  styles.viewImageText,
                  styles.marginTopDate,
                ]}>
                <Text style={styles.createAt}>
                  {moment(item.created_at).format('YYYY-MM-DD [at] HH:mm')}
                </Text>
                <Icon
                  name="public"
                  type="material"
                  size={16}
                  color={'#626162'}
                />
              </View>
            </View>
          </View>

          <View style={styles.viewIconPost}>
            <Icon name="ellipsis-horizontal" type="ionicon" size={28} />
            <Icon
              name="close-outline"
              type="ionicon"
              size={28}
              onPress={() => {
                item.deleted_at;
              }}
            />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.textDescription}>{item.content}</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={item.images}
          renderItem={item => {
            return (
              <View style={styles.imageContainer}>
                <Pressable onPress={() => openModal(item)}>
                  <AutoHeightImage
                    key={item.index.toString()}
                    source={{
                      uri: item.item,
                    }}
                    width={screenWidth}
                  />
                </Pressable>

                <Modal
                  visible={showModal}
                  transparent={true}
                  onRequestClose={closeModal}>
                  <View style={styles.viewIconClose}>
                    <Icon
                      name="close-circle"
                      size={30}
                      color="white"
                      type="ionicon"
                      onPress={closeModal}
                      style={styles.iconClose}
                    />
                  </View>

                  <View style={styles.viewModalImage}>
                    <GestureHandlerRootView>
                      <PinchGestureHandler
                        onGestureEvent={onGestureEvent}
                        onHandlerStateChange={onHandleState}>
                        <Animated.View style={{transform: [{scale}]}}>
                          <AutoHeightImage
                            key={selectedImage?.index.toString()}
                            source={{uri: selectedImage?.item}}
                            width={screenWidth}
                          />
                        </Animated.View>
                      </PinchGestureHandler>
                    </GestureHandlerRootView>
                  </View>
                </Modal>
              </View>
            );
          }}
          pagingEnabled
          onScroll={handleScroll(item.uuid)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {item.images && item.images.some(image => image !== null) && (
          <View style={styles.viewImagesLengh}>
            <Text style={styles.textImagesLengh}>
              {activeIndices[item.uuid] ? activeIndices[item.uuid] + 1 : 1}/
              {item.images.length + 0}
            </Text>
          </View>
        )}
      </View>

      <View style={{flex: 1}}>
        <View style={styles.viewLikeComment}>
          <View style={styles.viewNumberCount}>
            <View style={styles.iconText}>
              <View style={[styles.iconLike, styles.viewCenter]}>
                <IconMaterialIcons
                  name={'thumb-up-alt'}
                  color={'white'}
                  size={11}
                />
              </View>
              <Text style={styles.textLikeBlur} key={item.like_count}>
                {item.like_count}
              </Text>
            </View>
            <View style={styles.iconText}>
              <Text style={styles.textLikeBlur}>{item.comment_count}</Text>
              <Text style={styles.textLikeBlur}>comment</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerPost}>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => {
              handleLikePress(item.uuid);
            }}>
            <IconMaterialIcons
              name={item.is_liked ? 'thumb-up-alt' : 'thumb-up-off-alt'}
              color={
                item.is_liked
                  ? styles.colorIconHeartFocus.color
                  : styles.colorIconHeartBlur.color
              }
              size={24}
            />
            <Text
              style={
                item.is_liked ? styles.textLikeFocus : styles.textLikeBlur
              }>
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => NavigationService.navigate(routes.COMMENT_POST)}>
            <IconFontAwesome5
              name="comment"
              color={styles.colorIconHeartBlur.color}
              size={20}
            />
            <Text style={styles.textLikeBlur}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconText} onPress={onShare}>
            <Icon name="share-social-outline" type="ionicon" size={22} />
            <Text style={styles.textLikeBlur}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={dataAPI}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
                <Image style={styles.image} source={{uri: user.image_url}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonHeader}
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <Text style={styles.textButtonHeader}>Bạn đang nghĩ gì?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <ImageIcon />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemListPost;
