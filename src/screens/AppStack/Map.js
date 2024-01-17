/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Map = ({navigation}) => {
  const [count, setCount] = useState(1);
  console.log('count:', count);
  const [count1, setCount1] = useState(1);
  console.log('count1:', count1);

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 5,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ImageBackground
        source={require('../../assets/map1.png')}
        style={{
          height: 254,
          width: 395,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 30,
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('App', {screen: 'SelectOrder'})
              }>
              <Image
                source={require('../../assets/closeRingIcon.png')}
                style={{
                  height: 17,
                  width: 17,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: 60,
              height: 30,
              marginRight: 10,
            }}>
            <Image
              source={require('../../assets/searchIcon.png')}
              style={{
                height: 17,
                width: 17,
              }}
            />
            <Image
              source={require('../../assets/menuDots.png')}
              style={{
                height: 17,
                width: 17,
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            paddingTop: 10,
          }}>
          Cakes & Bakes - Borelesgamuwa
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '100',
            }}>
            Cakes .
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '100',
            }}>
            Pastries .
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '100',
            }}>
            Sandwich .
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '100',
            }}>
            Drinks .
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 35,
          paddingLeft: 10,
        }}>
        <Image
          source={require('../../assets/pin12.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            paddingLeft: 10,
          }}>
          48 Dehiwala Rd, Borelesgamuwa,{'\n'} India SA 10290
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 25,
          paddingLeft: 10,
        }}>
        <Image
          source={require('../../assets/timeFil.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            paddingLeft: 10,
          }}>
          Open until 2.00 AM
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('App', {screen: 'AddCart'})}
          style={{
            height: 35,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
            marginTop: 20,
            backgroundColor: '#FBF8F8',
            borderRadius: 40,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '300',
              color: '#024220',
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 40,
            width: '30%',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setCount(count - 1);
            }}
            disabled={count === 0 ? true : false}>
            <Image
              source={require('../../assets/minus1.png')}
              style={{
                height: 18,
                width: 18,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
            }}>
            {count}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <Image
              source={require('../../assets/plus1.png')}
              style={{
                height: 18,
                width: 18,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('App', {screen: 'PlaceOrder'})}
          style={{
            height: 35,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
            marginTop: 30,
            backgroundColor: '#FBF8F8',
            borderRadius: 40,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 2,
              height: 3,
            },
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '300',
              color: '#024220',
            }}>
            Place Order
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 40,
            width: '30%',
            marginTop: 32,
          }}>
          <TouchableOpacity
            onPress={() => {
              setCount1(count1 - 1);
            }}
            disabled={count1 === 0 ? true : false}>
            <Image
              source={require('../../assets/minus1.png')}
              style={{
                height: 18,
                width: 18,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
            }}>
            {count1}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCount1(count1 + 1);
            }}>
            <Image
              source={require('../../assets/plus1.png')}
              style={{
                height: 18,
                width: 18,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Map;
