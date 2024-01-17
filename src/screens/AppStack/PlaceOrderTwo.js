/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import React from 'react';

const PlaceOrderTwo = ({navigation}) => {
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
          paddingVertical: 25,
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
          Order
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignContent: 'center',
          marginTop: 20,
          marginVertical: 5,
        }}>
        <Image
          source={require('../../assets/bluebarry1.png')}
          style={{
            height: 69,
            width: 69,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            paddingVertical: 20,
            fontWeight: '500',
          }}>
          Cheesy Blueberry Cake
        </Text>
        <Text
          style={{
            marginTop: 21,
            color: '#024220',
            marginRight: 5,
          }}>
          Rs 1350{'\n'}x1
        </Text>
      </View>
      <Image source={require('../../assets/rectangle47.png')} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignContent: 'center',
          marginTop: 20,
        }}>
        <Image
          source={require('../../assets/strawberry2.png')}
          style={{
            height: 75,
            width: 75,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            marginRight: 60,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingVertical: 20,
              fontWeight: '500',
              // marginLeft: 30,
            }}>
            Strawberry Mojito
          </Text>
        </View>
        <Text
          style={{
            marginTop: 21,
            color: '#024220',
            marginRight: 5,
          }}>
          Rs 120{'\n'}x1
        </Text>
      </View>
      <Image
        source={require('../../assets/rectangle47.png')}
        style={{
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 60,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Sub Total
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          Rs 1470
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 71,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Delivery
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          Rs 120
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 60,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Total
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          Rs 1590
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 20,
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#024220',
          }}>
          Add More Items
        </Text>
        <Image
          source={require('../../assets/rightarrow1.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </View>
      <Image
        source={require('../../assets/rectangle47.png')}
        style={{
          marginTop: 25,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignItems: 'center',
          paddingLeft: 40,
          paddingRight: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#024220',
          }}>
          Promo Code
        </Text>
        <Image
          source={require('../../assets/rightarrow1.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </View>
      <Image
        source={require('../../assets/rectangle47.png')}
        style={{
          marginTop: 15,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignItems: 'center',
          paddingLeft: 40,
          paddingRight: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#024220',
          }}>
          Payment Method
        </Text>
        <Image
          source={require('../../assets/rightarrow1.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('App', {screen: 'PaymentTypeTwo'})}
          style={{
            backgroundColor: '#024220',
            height: 65.4,
            width: 240.9,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            CHECK OUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlaceOrderTwo;
