import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const [heartColor, setHeartColor] = useState('black');
  const navigation = useNavigation();

  const toggleHeartColor = () => {
    setHeartColor(heartColor === 'black' ? 'red' : 'black');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Instagram</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={toggleHeartColor} style={styles.icon}>
            <Ionicons name="heart-outline" size={24} color={heartColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')} style={styles.icon}>
            <Ionicons name="paper-plane-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
});
