import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Message() {
  const navigation = useNavigation();

  const handleUserInfoPress = () => {
    navigation.navigate('UserInfoMessage'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity style={styles.userInfo} onPress={handleUserInfoPress}>
        <Image
          style={styles.userImage}
          source={require('../assets/download.jpeg')} 
        />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>Sahra_ali</Text> 
          <Text style={styles.lastSeen}>Last seen 10 minutes ago</Text> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.userInfo} onPress={handleUserInfoPress}>
        <Image
          style={styles.userImage}
          source={require('../assets/icon.png')} 
        />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>John Doe</Text> 
          <Text style={styles.lastSeen}>Last seen 10 minutes ago</Text> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.userInfo} onPress={handleUserInfoPress}>
        <Image
          style={styles.userImage}
          source={require('../assets/gym.jpg')} 
        />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>Alison adams</Text> 
          <Text style={styles.lastSeen}>Last seen 10 minutes ago</Text> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.userInfo} onPress={handleUserInfoPress}>
        <Image
          style={styles.userImage}
          source={require('../assets/marish.jpg')} 
        />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>Marish_beauty</Text>
          <Text style={styles.lastSeen}>Online</Text> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.userInfo} onPress={handleUserInfoPress}>
        <Image
          style={styles.userImage}
          source={require('../assets/javascript_thumb.jpg')} 
        />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>javascript.Master</Text>
          <Text style={styles.lastSeen}> Online</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfoText: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lastSeen: {
    fontSize: 14,
    color: '#888',
  },
});
