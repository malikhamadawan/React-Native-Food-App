/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const SignUpNow = ({navigation}) => {
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
            paddingHorizontal: 15,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/fi-sr-envelope.png')}
            style={{
              height: 19,
              width: 20,
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: '90%',
              paddingLeft: 10,
            }}
            placeholder="Enter Email Address"
            placeholderTextColor="grey"
          />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            flexDirection: 'row',
            backgroundColor: '#D6FFD9',
            paddingHorizontal: 15,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/fda4.png')}
            style={{
              height: 19,
              width: 17,
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: '90%',
              paddingLeft: 10,
            }}
            placeholder="User Name"
            placeholderTextColor="grey"
          />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            flexDirection: 'row',
            backgroundColor: '#D6FFD9',
            paddingHorizontal: 15,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/group8.png')}
            style={{
              height: 19,
              width: 17,
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: '90%',
              paddingLeft: 10,
            }}
            placeholder="Enter password"
            placeholderTextColor="grey"
          />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            flexDirection: 'row',
            backgroundColor: '#D6FFD9',
            paddingHorizontal: 15,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/group8.png')}
            style={{
              height: 19,
              width: 17,
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: '90%',
              paddingLeft: 10,
            }}
            placeholder="Re-enter Password"
            placeholderTextColor="grey"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '20%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
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
              fontSize: 25,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',

          height: '35%',
        }}>
        <Image
          source={require('../../assets/google1.png')}
          style={{
            height: 55,
            width: 55,
            marginRight: 15,
          }}
        />
        <Image
          source={require('../../assets/fb1.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>
  );
};

export default SignUpNow;
