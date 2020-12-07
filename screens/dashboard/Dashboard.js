import React, {useState, useEffect} from 'react';
import {Text, ThemeProvider, Input, Button} from 'react-native-elements';
import {SafeAreaView, FlatList, View} from 'react-native';
import {styles} from './styles';
import * as colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/common/action';
import Apis from '../../api/apis/Apis';
import {createRequestBody} from '../../utils';
import PostItem from './PostItem';
import {get} from 'lodash';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [UIPosts, setUIPosts] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  const exit = () => {
    dispatch(logout());
    navigation.replace('login');
  };

  const getPosts = async () => {
    setLoading(true);
    const body = await createRequestBody(null, true);
    const result = await Apis.posts(body);
    setLoading(false);
    setPosts(result.get_dashboard);
    setUIPosts(result.get_dashboard);
  };

  const like = async (item) => {
    const body = await createRequestBody(
      {entityId: item.entityId, entityType: item.entityType},
      true,
    );
    const result = await Apis.postLike(body);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        {/* <Text h2>Dashboard</Text>
        <Text h4 style={{color: colors.secondary}}>
          {user.username}
        </Text>
        <Button
          onPress={exit}
          title=" Logout"
          icon={<Icon name="sign-out" size={15} color="white" />}
        />
        <Button
          // onPress={requests}
          title=" send request"
        /> */}
        <FlatList
          style={{flex: 1, marginBottom: 10}}
          data={UIPosts}
          renderItem={({item}) => <PostItem item={item} like={like} />}
          keyExtractor={(item) => item.entityId.toString()}
          onRefresh={getPosts}
          refreshing={loading}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
