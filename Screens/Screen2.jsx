import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from '../Background';
import BottomButton from '../Components/BottomButton';
import styles from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import { useDispatch } from 'react-redux';
import { setDuration } from '../redux/actions/Action';

const Screen2 = ({ navigation }) => {
  const [selectedRectangle, setSelectedRectangle] = useState(null);
  const [isOn, setIsOn] = useState(false);

  const rectangles = [
    { id: 1, text: 'Arcade', price: 9 },
    { id: 2, text: 'Advanced', price: 12 },
    { id: 3, text: 'Pro', price: 15 },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    !isOn ? dispatch(setDuration('Monthly')) : dispatch(setDuration('Yearly'));
  }, [isOn]);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleRectanglePress = (rectangle) => {
    setSelectedRectangle(rectangle);
  };

  const isRectangleSelected = (id) => {
    return selectedRectangle && selectedRectangle.id === id;
  };

  const getPrice = (rectangle) => {
    return isOn ? (rectangle ? rectangle.price * 10 : 0) : (rectangle ? rectangle.price : 0);
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>Select your plan</Text>
          <Text style={styles.subHeading}>
            You have the option of monthly or yearly billing.
          </Text>
          <View style={styles.rectangleContainer}>
            {rectangles.map((rectangle) => (
              <TouchableOpacity
                key={rectangle.id}
                style={[
                  styles.rectangle,
                  {
                    borderColor: isRectangleSelected(rectangle.id)
                      ? '#00f'
                      : '#ccc',
                  },
                ]}
                onPress={() => handleRectanglePress(rectangle)}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  {rectangle.text}
                </Text>
                <Text>
                  {`$${getPrice(rectangle)}/${
                    isOn ? 'yr' : 'mo' 
                  }`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.radioContainer}>
            <Text
              style={
                !isOn
                  ? { fontWeight: 'bold', marginRight: 5 }
                  : { fontWeight: 'normal', marginRight: 5 }
              }>
              Monthly
            </Text>
            <ToggleSwitch
              isOn={isOn}
              onColor="#000"
              offColor="#000"
              size="small"
              onToggle={handleToggleSwitch}
            />
            <Text
              style={
                isOn
                  ? { fontWeight: 'bold', marginLeft: 5 }
                  : { fontWeight: 'normal', marginLeft: 5 }
              }>
              Yearly
            </Text>
          </View>
        </View>
      </View>
      <BottomButton
        navigation={navigation}
        screenName={'Screen3'}
        readyToNavigate={selectedRectangle !== null}
        error={'Please Select a plan'}
        data={{ ...selectedRectangle, price: getPrice(selectedRectangle) }}
      />
    </Background>
  );
};

export default Screen2;
