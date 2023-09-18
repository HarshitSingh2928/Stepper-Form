
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import { Text } from 'react-native';
import PageCounter from './Components/PageCounter';
const Background = ({children}) => {
  return (
    <View style={styles.outer}>
      <ImageBackground
        source={require('./asset/images/bg-sidebar-mobile.png')} // Update with your image path
        style={styles.background}>
          <View style={styles.pageCounter}>
         <PageCounter/>
         </View>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%', 
    height: 200, 
    resizeMode: 'stretch',
  },
  outer: {
    flex: 1,
    width: '100%',
    // height: '100%',
    backgroundColor: '#f0f6ff',
  },
  imageContainer: {
    flex: 0, 
  },
  pageCounter:{
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default Background;
