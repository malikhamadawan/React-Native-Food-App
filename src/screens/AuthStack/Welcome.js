/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Welcome = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '1%',
      }}>
      <Image
        source={require('../../assets/fda1.png')}
        resizeMode="contain"
        style={{
          width: '100%',
          marginTop: 80,
        }}
      />
      <Text
        style={{
          fontSize: 40,
          color: '#024220',
          fontWeight: 'bold',
        }}>
        Free Delivery Offers
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: '#024220',
          fontWeight: '200',
          textAlign: 'center',
        }}>
        Free delivery for new customers via credit card and other payment method
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={{
          width: 291,
          height: 79,
          backgroundColor: '#024220',
          borderRadius: 30,
          marginTop: 80,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginTop: 23,
          }}>
          GET STARTED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
