/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const SignIn = ({navigation}) => {
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
            placeholder="Password"
            placeholderTextColor="grey"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginRight: '37%',
          marginBottom: 1,
          width: 200,
          height: 70,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#023519',
          }}>
          Forgot Password
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('App', {screen: 'Order'})}
          style={{
            width: 151,
            height: 64,
            backgroundColor: '#D6FFD9',
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',

            marginTop: 8,
            paddingHorizontal: 12,
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
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: '90%',
          marginTop: '30%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#024220',
          }}>
          New user for Just EAT
        </Text>
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
            navigation.navigate('SignUpNow');
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
              fontSize: 20,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            SignUp{'\n'}Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
