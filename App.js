import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import UserInfoMessage from "./componenets/UserInfoMessage"
import Stories from './componenets/Stories';
import User from './componenets/User';
import Footer from './componenets/Footer';
import Message from './componenets/Message';


const Stack = createStackNavigator();

const users = [
  {
    username: 'mohadin220',
    postImageSource: require('./assets/gym.jpg'),
    description: 'naso booqo',
    profilePictureSource: require('./assets/gyppfp.jpg'),
  },
  {
    username: 'Xubi_xayat',
    postImageSource: require('./assets/farmajo.jpg'),
    description: 'Second post description',
    profilePictureSource: require('./assets/javascript_thumb.jpg'),
  },
  {
    username: 'fardowsa_ali',
    postImageSource: require('./assets/company.jpg'),
    description: 'bar bilowga xarun ganacsi oo laga hirgalin doono magalada nairobi',
    profilePictureSource: require('./assets/marish.jpg'), 
  },
  {
    username: 'Marish_beauty',
    postImageSource: require('./assets/marish.jpg'),
    description: 'bar bilowga xarun ganacsi oo laga hirgalin doono magalada nairobi',
    profilePictureSource: require('./assets/company.jpg'), 
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => <HeaderRight/>,
        }}
      >
        <Stack.Screen name="FidnoGram" component={HomeScreen} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="UserInfoMessage" component={UserInfoMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HeaderRight() {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="paper-plane-outline"
      size={24}
      color="black"
      style={{ marginRight: 15 }}
      onPress={() => navigation.navigate('Message')}
    />
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Stories />
        {users.map((user, index) => (
          <User
            key={index}
            username={user.username}
            postImageSource={user.postImageSource}
            description={user.description}
            profilePictureSource={user.profilePictureSource} 
          />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
