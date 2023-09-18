import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from '../Background';
import BottomButton from '../Components/BottomButton';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Screen3 = ({ navigation }) => {
  const [selectedRectangles, setSelectedRectangles] = useState([]);
  const selectedDuration = useSelector((state)=>state.selectedDuration.Duration)
  const rectangles = [
    {
      id: 1,
      text: 'Online Service',
      subText: 'Access to multiplayer games',
      price: 1,
    },
    {
      id: 2,
      text: 'Larger Storage',
      subText: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      id: 3,
      text: 'Customizable profile',
      subText: 'Custom theme on your profile',
      price: 2,
    },
  ];

  const getPrice = (rectangle) => {
    return selectedDuration==='Yearly' ? (rectangle ? rectangle.price * 10 : 0) : (rectangle ? rectangle.price : 0);
  };

  const handleRectanglePress = (rectangle) => {
    if (isRectangleSelected(rectangle)) {
      setSelectedRectangles((prevSelected) =>
        prevSelected.filter((selectedRect) => selectedRect.id !== rectangle.id)
      );
    } else {
      setSelectedRectangles((prevSelected) => [...prevSelected, rectangle]);
    }
  };

  const isRectangleSelected = (rectangle) => {
    return selectedRectangles.some((selectedRect) => selectedRect.id === rectangle.id);
  };

  const updatedSelectedRectangles = selectedRectangles.map((rectangle) => ({
    ...rectangle,
    price: getPrice(rectangle),
  }));

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>Pick add-ons</Text>
          <Text style={styles.subHeading}>
            Add-ons help enhance your gaming experience.
          </Text>
          <View style={styles.rectangleContainer}>
            {rectangles.map((rectangle) => (
              <TouchableOpacity
                key={rectangle.id}
                style={[
                  styles.rectangle,
                  {
                    borderColor: isRectangleSelected(rectangle) ? '#00f' : '#ccc',
                  },
                ]}
                onPress={() => handleRectanglePress(rectangle)}
              >
                <View style={styles.rectangleContent}>
                  <View style={styles.checkbox}>
                    {isRectangleSelected(rectangle) ? (
                      <FontAwesomeIcon icon={faSquareCheck} />
                    ) : (
                      <></>
                    )}
                  </View>
                  <View style={{ width: '75%' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                      {rectangle.text}
                    </Text>
                    <Text>{rectangle.subText}</Text>
                  </View>
                  <Text>
                    {`$${getPrice(rectangle)}/${
                      selectedDuration==='Yearly' ? 'yr' : 'mo'
                    }`}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <BottomButton
        navigation={navigation}
        screenName={'Screen4'}
        readyToNavigate={updatedSelectedRectangles.length > 0}
        error={'Please select at least one add-on'}
        data={updatedSelectedRectangles}
      />
    </Background>
  );
};

export default Screen3;
