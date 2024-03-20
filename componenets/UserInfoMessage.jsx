import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function MessageInput() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: message, sentByUser: true },
      ]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="camera" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="mic" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="image" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.userImageContainer}>
        <Image
          source={require('../assets/splash.png')}
          style={styles.userImage}
        />
      </View>
      {messages.map((msg, index) => (
        <View
          key={index}
          style={[
            styles.message,
            { alignSelf: msg.sentByUser ? 'flex-end' : 'flex-start' },
            { backgroundColor: msg.sentByUser ? '#007AFF' : '#EEE' }
          ]}
        >
          <Text style={{ color: msg.sentByUser ? '#FFF' : '#000' }}>{msg.text}</Text>
        </View>
      ))}

      <TextInput
        style={styles.input}
        placeholder="Type your message here..."
        placeholderTextColor="#888"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  userImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  message: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default MessageInput;
