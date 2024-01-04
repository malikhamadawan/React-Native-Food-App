/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SelectOrder = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 5,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ImageBackground
        source={require('../../assets/bluebarry1.png')}
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
        Cheesy Blueberry{'\n'}Cake
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
          Indian
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
          Pakistani
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
        <Image
          source={require('../../assets/arrow12.png')}
          style={{
            height: 12,
            width: 12,
            marginRight: 20,
          }}
        />
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
            RS 800
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
            2.04km
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
            4.8
            <Text
              style={{
                fontSize: 12,
                fontWeight: '200',
              }}>
              {' '}
              140+ Reviews
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
    </View>
  );
};

export default SelectOrder;
