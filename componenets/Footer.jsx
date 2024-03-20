import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={24} color="black" style={styles.icon} />
      <FontAwesome name="search" size={24} color="black" style={styles.icon} />
      <FontAwesome name="video-camera" size={24} color="black" style={styles.icon} />
      <Image source={require('../assets/somali.jpeg')} style={styles.circularIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 20,
  },
  circularIcon: {
    width: 40,
    height: 40,
    borderRadius: 22, 
  },
});
