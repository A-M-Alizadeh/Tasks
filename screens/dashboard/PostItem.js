import React, {useState} from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createRequestBody} from '../../utils';
import Apis from '../../api/apis/Apis';

export default function PostItem({item, like}) {
  const [likeCount, setLikeCount] = useState(item.likes.length);
  const [userLike, setUserLike] = useState(item.user_like);

  const likeInside = async () => {
    const body = await createRequestBody(
      {entityId: item.entityId, entityType: item.entityType},
      true,
    );
    const result = await Apis.postLike(body);
    setLikeCount(result.like.info.size);
    setUserLike(true);
  };

  return (
    <Card>
      <Card.Title>{item.user.username}</Card.Title>
      <Card.Divider />
      {item.images.length > 0 && (
        <Card.Image style={{width:'100%', height:250}} source={{uri: item.images[0].url}} resizeMode='stretch' />
      )}
      <Text style={{marginBottom: 10}}>
        {item.text !== '' ? item.text : item.entityType}
      </Text>
      {item.likable && (
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="heart"
            color={userLike ? 'red' : 'lightgrey'}
            size={20}
            onPress={() => {
              userLike ? null : likeInside();
            }}
          />
          <Text style={{marginLeft: 10}}>{likeCount}</Text>
        </View>
      )}
    </Card>
  );
}
