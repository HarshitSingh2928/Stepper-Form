import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setActiveNumber } from '../redux/actions/Action';

const PageCounter = () => {
  const navigation = useNavigation();
  const activeNumber = useSelector((state) => state.activeNumber.activeNumber);
  const dispatch = useDispatch();

  const handleCirclePress = (pageNumber) => {
    if (pageNumber < activeNumber) {
      
      dispatch(setActiveNumber(pageNumber));  
      switch (pageNumber) {
        case 1:
          navigation.navigate('Screen1');
          break;
        case 2:
          navigation.navigate('Screen2');
          break;
        case 3:
          navigation.navigate('Screen3');
          break;
        case 4:
          navigation.navigate('Screen4');
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((number) => (
        <TouchableOpacity
          key={number}
          onPress={() => handleCirclePress(number)}
          style={[
            styles.circle,
            number === activeNumber ? styles.activeCircle : null,
          ]}
        >
          <Text
            style={[
              styles.circleText,
              number === activeNumber ? styles.activeText : null,
            ]}
          >
            {number}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PageCounter;

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    margin: 5,
  },
  circleText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  activeCircle: {
    backgroundColor: 'hsl(206, 94%, 87%)',
  },
  activeText: {
    color: 'black',
  },
});
