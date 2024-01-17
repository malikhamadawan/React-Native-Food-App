/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';

const OrderScrollDown = ({navigation}) => {
  const newData = [
    {
      image: require('../../assets/bluebarry1.png'),
      title: 'Blueberry Cake',
      price: 'Rs 800',
      rating: '4.5',
      delivery: '35 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/mango.png'),
      title: 'Mango Smoothie',
      price: 'Rs 550',
      rating: '4.8',
      delivery: '20 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/noodle.png'),
      title: 'Chinese Noodles',
      price: 'Rs 1200',
      rating: '4.2',
      delivery: '30 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/soup.png'),
      title: 'Spicy Tomato Soup',
      price: 'Rs 350',
      rating: '4.1',
      delivery: '40 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/pratha.png'),
      title: 'Chicken Pratha',
      price: 'Rs 350',
      rating: '4.7',
      delivery: '25 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/sandwich.png'),
      title: 'Chicken Sandwich',
      price: 'Rs 650',
      rating: '4.4',
      delivery: '30 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/chaplikabab.jpeg'),
      title: 'Chicken Chapli Kabab',
      price: 'Rs 400',
      rating: '4.2',
      delivery: '15 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/chickenshawarma.jpeg'),
      title: 'Chicken Shawarma',
      price: 'Rs 280',
      rating: '4.7',
      delivery: '25 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/pizza.jpeg'),
      title: 'Chicken Pizza',
      price: 'Rs 1700',
      rating: '4.5',
      delivery: '45 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/burger.jpeg'),
      title: 'Chicken Burger',
      price: 'Rs 320',
      rating: '4.6',
      delivery: '25 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/chickenplatter.jpeg'),
      title: 'Chicken Platter',
      price: 'Rs 650',
      rating: '4.5',
      delivery: '25 Minutes - Free Delivery',
    },
    {
      image: require('../../assets/chickenrap.jpeg'),
      title: 'Chicken Rap',
      price: 'Rs 750',
      rating: '4.9',
      delivery: '20 Minutes - Free Delivery',
    },
  ];

  const truncateText = text => {
    const maxLength = 12;
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    } else {
      return text;
    }
  };
  return (
    <View
      style={{
        marginTop: Platform.OS === 'android' ? 5 : 60,
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          width: '100%',

          flexDirection: 'row',
          height: 67,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '80%',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '200',
            }}>
            Deliver to
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Fussels lane, Colombo 06
            </Text>
            <Image
              source={require('../../assets/downarrow.png')}
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                height: 24,
                width: 24,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: '20%',
            height: 67,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('App', {screen: 'Setting'})}>
            <Image
              source={require('../../assets/ellipse.png')}
              resizeMode="contain"
              style={{
                width: 67,
                height: 67,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#D6FFD9',
          marginTop: 20,
          borderRadius: 10,
          marginHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/search1.png')}
          style={{
            width: 24,
            height: 24,
          }}
        />
        <TextInput
          style={{
            height: 40,
            width: '80%',
            paddingLeft: 10,
          }}
          placeholder="Restaurants, Foods Or Drinks..."
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        numColumns={2}
        data={newData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('App', {screen: 'SelectOrder'})}
            style={{
              justifyContent: 'center',
              width: '50%',
              height: 250,
              alignItems: 'center',
            }}>
            <Image
              source={item.image}
              style={{
                height: 133,
                width: '90%',
                borderRadius: 20,
              }}
            />
            <View
              style={{
                width: '100%',
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: 'bold',
                  // backgroundColor: 'red',
                }}>
                {truncateText(item.title)}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                }}>
                {item.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#024220',
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  alignSelf: 'flex-start',
                  borderRadius: 11,
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                  }}>
                  {item.rating}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 10,
                }}>
                {item.delivery}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OrderScrollDown;
