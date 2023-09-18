import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  addAddons,
  addPlan,
  resetPlan,
  setActiveNumber,
} from '../redux/actions/Action';

const BottomButton = ({
  navigation,
  screenName,
  readyToNavigate,
  error,
  data,
}) => {
  const dispatch = useDispatch();
  const handleNext = () => {
    if (readyToNavigate) {
      if (screenName === 'Screen4') {
        dispatch(addAddons(data));
        dispatch(setActiveNumber(4));
      } else if (screenName === 'Screen3') {
        dispatch(addPlan(data));
        dispatch(setActiveNumber(3));
      } else if (screenName === 'Screen2') {
        dispatch(setActiveNumber(2));
      }

      if (screenName === 'Screen5') {
        Alert.alert('Thank You', 'Your order has been confirmed. Enjoy!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Screen4');
            },
          },
        ]);
      } else {
        navigation.navigate(screenName);
      }
    } else {
      console.warn(error);
    }
  };

  const handleBack = () => {
    if (screenName === 'Screen5') {
      dispatch(setActiveNumber(3));
    } else if (screenName === 'Screen3') {
      dispatch(setActiveNumber(1));
    } else if (screenName === 'Screen4') {
      dispatch(setActiveNumber(2));
    }
    navigation.goBack();
  };

  const nextButtonStyles =
    screenName === 'Screen5'
      ? {backgroundColor: 'hsl(243, 100%, 62%)'}
      : {backgroundColor: '#02295a'};

  const nextButtonText = screenName === 'Screen5' ? 'Confirm' : 'Next Step';

  return (
    <View style={styles.buttonContainer}>
      {screenName !== 'Screen2' && (
        <TouchableOpacity onPress={handleBack} style={styles.prevBtn}>
          <Text style={styles.prevBtnText}>Go Back</Text>
        </TouchableOpacity>
      )}
      <View style={{flex: 1}} />
      <TouchableOpacity
        onPress={handleNext}
        style={[styles.nextBtn, nextButtonStyles]}>
        <Text style={styles.nextBtnText}>{nextButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    position: 'absolute',
    bottom: -460,
  },
  nextBtn: {
    borderRadius: 5,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnText: {
    color: 'white',
    fontSize: 16,
  },
  prevBtn: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevBtnText: {
    color: 'hsl(231, 11%, 63%)',
    fontSize: 16,
  },
});
