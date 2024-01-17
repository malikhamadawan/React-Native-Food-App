/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const Mojito = ({navigation}) => {
  const data = [
    {
      title: 'Triple Chocolate Brownie',
      id: 0,
      image: require('../../assets/brownie.png'),
      price: 'Rs 650',
      dilevery: 'Free dilevery',
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
        marginTop: Platform.OS === 'ios' ? 50 : 5,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ImageBackground
        source={require('../../assets/strawberry.png')}
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
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            <Image
              source={require('../../assets/closeRingIcon.png')}
              style={{
                height: 17,
                width: 17,
              }}
            />
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
      <Text
        style={{
          fontSize: 30,
          fontWeight: '400',
          paddingHorizontal: 10,
        }}>
        Strawberry{'\n'}Mojito
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '200',
          }}>
          Cakes & Bakes
        </Text>
        <Image
          source={require('../../assets/dot22.png')}
          style={{
            height: 5,
            width: 5,
            marginHorizontal: 6,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: '200',
          }}>
          Cool
        </Text>
        <Image
          source={require('../../assets/dot22.png')}
          style={{
            height: 5,
            width: 5,
            marginHorizontal: 6,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: '200',
          }}>
          Fresh juice
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 10,
            paddingHorizontal: 12,
          }}>
          48 Dehiwala Rd, Borelesgamuwa, India SA 10290 {'\n'}
          Tap for hours, info, and more
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('App', {screen: 'MapTwo'})}>
          <Image
            source={require('../../assets/arrow12.png')}
            style={{
              height: 12,
              width: 12,
              marginRight: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../assets/dollar11.png')}
            style={{
              height: 17,
              width: 17,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
            }}>
            RS 550
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../assets/pin11.png')}
            style={{
              height: 17,
              width: 17,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
            }}>
            2.4km
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../assets/star11.png')}
            style={{
              height: 17,
              width: 17,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
            }}>
            4.5
            <Text
              style={{
                fontSize: 12,
                fontWeight: '200',
              }}>
              {' '}
              70+ Reviews
            </Text>
          </Text>
        </View>
      </View>
      <Image
        source={require('../../assets/rectangle6.png')}
        style={{
          marginTop: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 35,
            backgroundColor: '#024220',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 11,
              color: 'white',
            }}>
            See similar
          </Text>
          <Image
            source={require('../../assets/uparrow.png')}
            style={{
              height: 14,
              width: 7.67,
              marginLeft: 4,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 35,
            backgroundColor: '#024220',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 11,
              color: 'white',
            }}>
            Most popular
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/rectangle6.png')} style={{}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
          }}>
          All Menu
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
          }}>
          Cakes
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
          }}>
          Pastries
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
          }}>
          Sandwich
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
          }}>
          Drinks
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              // backgroundColor: 'red',
              marginTop: 10,
              flexDirection: 'row',
              paddingHorizontal: 10,
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Mojito;
