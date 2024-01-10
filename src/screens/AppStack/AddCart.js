/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Platform,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import InsetShadow from 'react-native-inset-shadow';

const AddCart = () => {
  const data = [
    {
      title: 'Triple Chocolate Brownie',
      id: 0,
      image: require('../../assets/brownie.png'),
      price: 'Rs 650',
      dilevery: 'Free dilevery',
      rating: '4.8',
    },
    {
      title: 'Sweet And Spicy Pastry',
      id: 1,
      image: require('../../assets/pastry1.png'),
      price: 'Rs 400',
      dilevery: 'Rs 120 For dilevery',
    },
    {
      title: 'Creamy Kheer',
      id: 2,
      image: require('../../assets/kheer.jpeg'),
      price: 'Rs 750',
      dilevery: 'Rs 150 For dilevery',
    },
    {
      title: 'Gajar Halwa',
      id: 3,
      image: require('../../assets/gajarHalwa.jpeg'),
      price: 'Rs 950',
      dilevery: 'Rs 200 For dilevery',
    },
    {
      title: 'Barbie Cake',
      id: 4,
      image: require('../../assets/barbieCake.jpeg'),
      price: 'Rs 2200',
      dilevery: 'Rs 250 For dilevery',
    },
    {
      title: 'Mini Chocolate Cake',
      id: 5,
      image: require('../../assets/miniChocolateCake.jpeg'),
      price: 'Rs 550',
      dilevery: 'Rs 100 For dilevery',
    },
    {
      title: 'Ranbow Sprinkle Cake',
      id: 6,
      image: require('../../assets/ranbowSprinkleCake.jpeg'),
      price: 'Rs 1950',
      dilevery: 'Rs 200 For dilevery',
    },
  ];

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
          <Image
            source={require('../../assets/ellipse.png')}
            resizeMode="contain"
            style={{
              width: 67,
              height: 67,
              alignSelf: 'flex-end',
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#D6FFD9',
          marginTop: 7,
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
        data={data}
        contentContainerStyle={{
          marginTop: 20,
        }}
        renderItem={({item}) => (
          <View
            style={{
              // backgroundColor: 'red',
              marginTop: 10,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                // backgroundColor: 'blue',
              }}>
              <Image
                source={item.image}
                style={{
                  height: 69,
                  width: 69,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  textAlign: 'left',
                  marginTop: 10,
                  marginLeft: 5,
                }}>
                {item.title}
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '200',
                  }}>
                  {'\n'}
                  {item.price} {item.dilevery}
                </Text>
              </Text>
            </View>
            {/* <View
              style={{
                width: '20%',
                // backgroundColor: 'orange',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  height: 25,
                  width: 40,
                  backgroundColor: '#D6FFD9',
                  borderRadius: 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 1,
                  // marginHorizontal:50,
                  alignSelf: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    shadowOpacity: 1,
                    shadowOffset: {
                      width: 0,
                      height: -4,
                    },
                    shadowColor: 'black',
                  }}>
                  Add
                </Text>
              </TouchableOpacity>
            </View> */}
            <TouchableOpacity
              style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <InsetShadow
                bottom={false}
                shadowRadius={5}
                elevation={7}
                containerStyle={{
                  height: 20,
                  width: 37,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#D6FFD9',
                  borderRadius: 30,
                }}>
                {/* <Text>This view has an inset shadow!</Text> */}
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '300',
                    color: 'black',
                  }}>
                  Add
                </Text>
              </InsetShadow>
            </TouchableOpacity>
          </View>
        )}
      />
      <View
        style={{
          height: 50,
          width: 357,
          backgroundColor: '#D6FFD9',
          marginBottom: 40,
          // alignItems: 'center',
          // justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 15,
          paddingLeft: 10,
          paddingTop: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/shoppingcart.png')}
            style={{
              height: 29,
              width: 30,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              textAlign: 'left',
              marginLeft: 40,
              fontWeight: '600',
            }}>
            1 Item{'\n'}
            <Text
              style={{
                fontSize: 15,
                textAlign: 'left',
                fontWeight: '300',
              }}>
              Cheesy Blueberry Cake
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              paddingLeft: 40,
            }}>
            Rs 800
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AddCart;
