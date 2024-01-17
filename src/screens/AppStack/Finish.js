/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import React from 'react';

const Finish = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 5,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: 10,
          paddingLeft: 20,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: '200',
          }}>
          Skip
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: '17%',
        }}>
        <Image
          source={require('../../assets/finish112.png')}
          style={{
            width: 175,
            height: 157,
            borderRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '80%',
          marginHorizontal: 40,
          marginVertical: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
          }}>
          JHON
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/star_fill.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
          <Image
            source={require('../../assets/star_fill.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
          <Image
            source={require('../../assets/star_fill.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
          <Image
            source={require('../../assets/star_fill.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
          <Image
            source={require('../../assets/star.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 35,
          backgroundColor: '#024220',
          borderRadius: 40,
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 11,
            color: 'white',
          }}>
          Submit
        </Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/rectangle494.png')}
        style={{
          marginVertical: 25,
        }}
      />
      <View
        style={{
          width: '95%',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/fda1.png')}
          resizeMode="contain"
          style={{
            height: 125,
            width: 169,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: '#024220',
            marginLeft: 22,
            marginTop: 7,
          }}>
          Just EAT
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '8%',
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '400',
            color: 'black',
            shadowOpacity: 0.4,
            shadowOffset: {
              width: 2,
              height: 5,
            },
          }}>
          Thank you for your order
        </Text>
      </View>
    </View>
  );
};

export default Finish;
