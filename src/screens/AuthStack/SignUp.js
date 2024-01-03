/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const SignUp = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '95%',
          flexDirection: 'row',
          marginTop: 70,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/fda1.png')}
          resizeMode="contain"
          style={{
            height: 78,
            width: 114,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#024220',
            marginLeft: 20,
          }}>
          Just EAT
        </Text>
      </View>
      <Text
        style={{
          fontSize: 25,
          marginTop: 50,
        }}>
        Satisfy Your Cravings with a Click
      </Text>
      <View
        style={{
          width: '90%',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            marginTop: 80,
            flexDirection: 'row',
            backgroundColor: '#D6FFD9',
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/fda2.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: '90%',
              paddingLeft: 10,
            }}
            placeholder="Enter Develivery Address"
            placeholderTextColor="grey"
          />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            flexDirection: 'row',
            backgroundColor: '#D6FFD9',
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/fda3.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: '90%',
              paddingLeft: 10,
            }}
            placeholder="Deliver now"
            placeholderTextColor="grey"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',

          width: '100%',
          marginTop: '60%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          style={{
            width: 151,
            height: 64,
            backgroundColor: '#D6FFD9',
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/fda4.png')}
            style={{
              height: 24,
              width: 24,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: '400',
              color: 'black',
              alignSelf: 'center',
            }}>
            LogIn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 151,
            height: 64,
            backgroundColor: '#024220',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '400',
              color: 'white',
              alignSelf: 'center',
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
