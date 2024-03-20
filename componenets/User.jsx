import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function User(props) {
  const { username, postImageSource, description, profilePictureSource } = props;
  const [heartColor, setHeartColor] = useState('black');
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const toggleHeartColor = () => {
    setHeartColor(heartColor === 'black' ? 'red' : 'black');
  };

  const handleCommentIconPress = () => {
    setShowComments(!showComments);
  };

  const handleCommentChange = (text) => {
    setCommentText(text);
  };

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profilePictureSource} style={styles.profileImage} />
        <Text style={styles.usernameText}>{username}</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>
      <Image source={postImageSource} style={styles.postImage} />
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={toggleHeartColor}>
            <FontAwesome name="heart-o" size={24} color={heartColor} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCommentIconPress}>
            <FontAwesome name="comment-o" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <FontAwesome name="telegram" size={24} color="black" style={styles.icon} />
        </View>
        <FontAwesome name="bookmark-o" size={24} color="black" style={styles.icon} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
        <Text>{description}</Text>
      </View>
      {showComments && (
        <View style={styles.commentSection}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={commentText}
            onChangeText={handleCommentChange}
          />
          <TouchableOpacity onPress={handleAddComment}>
            <Text style={styles.addCommentButton}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.comments}>
        {comments.map((comment, index) => (
          <Text key={index}>{comment}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  usernameText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  userInfo: {
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentSection: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addCommentButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
  comments: {
    padding: 10,
  },
});
