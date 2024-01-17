/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Platform} from 'react-native';
import React from 'react';

const OrderStatusSix = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 5,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 15,
        }}>
        <Image
          source={require('../../assets/leftArrow.png')}
          style={{
            height: 24,
            width: 24,
            marginLeft: 10,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 60,
            fontWeight: '400',
          }}>
          Order Status
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/map121.png')}
          style={{
            height: 350,
            width: 384,
            backgroundColor: 'red',
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          backgroundColor: '#D9D9D9',
          width: 349,
          height: 67,
          marginLeft: 20,
          borderRadius: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/jhon.png')}
            style={{
              height: 42,
              width: 52,
            }}
          />
          <View
            style={{
              marginLeft: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                JHON
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/expandrightdouble.png')}
                style={{
                  height: 19,
                  width: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: 'black',
                }}>
                TN 2425
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/messageicon.png')}
            style={{
              height: 30,
              width: 28,
            }}
          />
          <Image
            source={require('../../assets/phoneicon.png')}
            style={{
              height: 30,
              width: 28,
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '25%',
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '400',
            shadowOpacity: 0.4,
            shadowOffset: {
              width: 2,
              height: 5,
            },
          }}>
          Delivered Successful
        </Text>
      </View>
    </View>
  );
};

export default OrderStatusSix;
