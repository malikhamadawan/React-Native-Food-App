/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import StepIndicator from '@fcxlabs/react-native-step-indicator';

const OrderStatus = () => {
  const labels = [
    'Your order is accepted',
    'Preparing your order',
    'Your order is ready',
    'The driver is on the way',
    'Delivered',
  ];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30, // Provide a numeric value here
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: 'black',
    stepStrokeWidth: 6,
    stepStrokeFinishedColor: '#D6FFD9',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#024220',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#024220',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#024220',
    stepIndicatorLabelFinishedColor: '#024220',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 18,
    currentStepLabelColor: 'black',
  };
  const [currentPosition, setCurrentPosition] = useState(3);

  const onPageChange = position => {
    setCurrentPosition(position);
  };
  const renderStepIndicator = ({position, stepStatus}) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {/* You can customize this to display an image or any other component */}
        {/* <Text style={{color: 'transparent'}}>{position + 1}</Text> */}
      </View>
    );
  };
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
          height: '45%',
          paddingLeft: 50,
        }}>
        <StepIndicator
          direction={'vertical'}
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          onPress={onPageChange}
          renderStepIndicator={renderStepIndicator}
        />
      </View>
      <View
        style={{
          marginTop: 10,
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
            // backgroundColor: 'yellow',
            // alignSelf: 'flex-end',
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
          width: '100%',
          top: 150,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#024220',
            width: 100,
            height: 35,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#ffff',
            }}>
            Cancle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderStatus;
