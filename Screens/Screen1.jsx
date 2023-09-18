import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Background from '../Background';
import BottomButton from '../Components/BottomButton';
import styles from './styles';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [readyToNavigate, setReadyToNavigate] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (name.length && isValidPhone(phone) && isValidEmail(email)) {
      setReadyToNavigate(true);
      setError('');
    } else {
      if (!name.length && !phone.length && !email.length) {
        setError('Kindly fill all fields');
      } else if (!isValidEmail(email)) {
        setError('Enter correct email');
      } else if (!isValidPhone(phone)) {
        setError('Enter correct phone number');
      }
      setReadyToNavigate(false);
    }
  }, [name, phone, email]);

  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phone);
  }

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <View style={styles.box}>
            <Text style={styles.heading}>Personal info</Text>
            <Text style={styles.subHeading}>
              Please provide your name, email address, and phone number.
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                inputMode='email'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                inputMode='tel'
              />
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomButton navigation={navigation} screenName={'Screen2'} readyToNavigate={true} error={error}/>
    </Background>
  );
};

export default Screen1;
