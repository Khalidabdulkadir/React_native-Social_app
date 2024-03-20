import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Stories() {
  const users = [
    { name: 'Your story', image: require('../assets/download.jpeg') },
    { name: 'samera_ali2', image: require('../assets/images.jpeg') },
    { name: 'Fardowsa_isaq', image: require('../assets/somali.jpeg') },
    { name: 'Mohanis 4', image: require('../assets/gym.jpg') },
  ];

  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <View key={index} style={styles.storyContainer}>
          <View style={styles.story}>
            {index === 0 && (
              <View style={styles.plusIcon}>
                <Text style={styles.plusText}>+</Text>
              </View>
            )}
            <Image style={styles.image} source={user.image} />
          </View>
          <Text style={styles.text}>{user.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  storyContainer: {
    alignItems: 'center',
  },
  story: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
  plusIcon: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
  },
  plusText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
