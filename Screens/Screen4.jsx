import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from '../Background';
import BottomButton from '../Components/BottomButton';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import { setActiveNumber } from '../redux/actions/Action';

const Screen4 = ({navigation}) => {
  const addon = useSelector(state => state.selectedAddons.Addons);
  const plan = useSelector(state => state.selectedPlan.Plan);
  const selectedDuration = useSelector(
    state => state.selectedDuration.Duration,
  );
  const dispatch =useDispatch();

  // console.warn(addon);
  const handleChangePress = () => {
    dispatch(setActiveNumber(2)); 
    navigation.navigate('Screen2');
  };
  const getTotal = () => {
    let price = 0;
    addon.map(item => {
      price += item.price;
    });
    price += plan[0].price;
    return price;
  };
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>Finishing Up</Text>
          <Text style={styles.subHeading}>
            Double-check everything looks OK before confirming{' '}
          </Text>
          <View style={styles.summary}>
            <View style={styles.plan}>
              <Text
                style={
                  styles.planText
                }>{`${plan[0].text} (${selectedDuration})`}</Text>
              <TouchableOpacity
                onPress={handleChangePress}
                style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:5}}>
                <Text style={{textDecorationLine: 'underline'}}>Change</Text>
                <Text>{`$${plan[0].price}${
                  selectedDuration === 'Monthly' ? '/mo' : '/yr'
                }`}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addonView}>
              {addon.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <Text style={styles.text}>{item.text}</Text>
                  <Text style={styles.price}>{`+$${item.price}/${
                    selectedDuration === 'Yearly' ? 'yr' : 'mo'
                  }`}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
          <Text>{`Total (per ${
            selectedDuration === 'Yearly' ? 'year' : 'month'
          })`}</Text>
          <Text style={{color:'hsl(243, 100%, 62%)',fontWeight:'bold'}}>
            {' '}
            {`+$${getTotal()}/${selectedDuration === 'Yearly' ? 'yr' : 'mo'}`}
          </Text>
          </View>
        </View>
      </View>
      <BottomButton
        navigation={navigation}
        screenName={'Screen5'}
        readyToNavigate={'true'}
        error={'Please select atleast one add-on'}
      />
    </Background>
  );
};

export default Screen4;
