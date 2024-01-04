/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';

const Order = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 5,
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
          marginTop: 15,
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
      <TouchableOpacity
        style={{
          width: '90%',
          height: '30%',
        }}>
        <ImageBackground
          source={require('../../assets/freedelivery.png')}
          style={{
            width: 370,
            height: 173,
            marginTop: 30,
            alignItems: 'flex-end',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginRight: 10,
              textAlign: 'right',
            }}>
            Free Delivery For{'\n'}1 Month!!{'\n'}
            <Text
              style={{
                fontSize: 15,
                textAlign: 'right',
                fontWeight: 'normal',
                color: 'grey',
              }}>
              You’ve order at least Rs 1000{'\n'}for using free delivery
            </Text>
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/rectangle30.png')}
            style={{
              width: 78,
              height: 103,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/rectangle31.png')}
            style={{
              width: 78,
              height: 103,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/rectangle32.png')}
            style={{
              width: 78,
              height: 103,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/rectangle33.png')}
            style={{
              width: 78,
              height: 103,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '300',
          }}>
          Feature Partners
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '300',
          }}>
          See all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginTop: 15,
            marginVertical: 5,
            paddingBottom: 35,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/rectangle34.png')}
              style={{
                width: 201,
                height: 133,
              }}
            />
            <Text
              style={{
                fontSize: 21,
                flexDirection: 'row',
                marginTop: 10,
              }}>
              Sweet Corn
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '200',
              }}>
              Rs:280
            </Text>
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
                  4.6
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 10,
                }}>
                25 Minutes - Free Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/image111.png')}
              style={{
                width: 201,
                height: 133,
                marginLeft: 15,
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                fontSize: 21,
                marginLeft: 17,
                marginTop: 10,
              }}>
              French Fries
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '200',
                marginLeft: 15,
              }}>
              Rs:300
            </Text>
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
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                  }}>
                  4.8
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 10,
                }}>
                25 Minutes - Free Delivery
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Order;
