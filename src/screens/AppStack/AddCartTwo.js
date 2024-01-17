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
import React, {useState} from 'react';
import InsetShadow from 'react-native-inset-shadow';
// import {cleanSingle} from 'react-native-image-crop-picker';

const AddCartTwo = ({navigation}) => {
  const [button, setButton] = useState(false);
  const [count, setCount] = useState(1);
  console.log('count:', count);
  const [count1, setCount1] = useState(1);
  console.log('count1:', count1);
  const [data, setData] = useState([
    {
      title: 'Triple Chocolate Brownie',
      id: 0,
      image: require('../../assets/brownie.png'),
      price: 'Rs 650',
      dilevery: 'Free dilevery',
      rating: '4.8',
      value: false,
      count: 0,
    },
    {
      title: 'Sweet And Spicy Pastry',
      id: 1,
      image: require('../../assets/pastry1.png'),
      price: 'Rs 400',
      dilevery: 'Rs 120 For dilevery',
      value: false,
      count: 0,
    },
    {
      title: 'Creamy Kheer',
      id: 2,
      image: require('../../assets/kheer.jpeg'),
      price: 'Rs 750',
      dilevery: 'Rs 150 For dilevery',
      value: false,
      count: 0,
    },
    {
      title: 'Gajar Halwa',
      id: 3,
      image: require('../../assets/gajarHalwa.jpeg'),
      price: 'Rs 950',
      dilevery: 'Rs 200 For dilevery',
      value: false,
      count: 0,
    },
    {
      title: 'Strawberry Mojito',
      id: 4,
      image: require('../../assets/strawberry2.png'),
      price: 'Rs 2200',
      dilevery: 'Rs 250 For dilevery',
      value: false,
      count: 0,
    },
    {
      title: 'Barbie Cake',
      id: 5,
      image: require('../../assets/barbieCake.jpeg'),
      price: 'Rs 2200',
      dilevery: 'Rs 250 For dilevery',
      value: false,
      count: 0,
    },
    {
      title: 'Mini Chocolate Cake',
      id: 6,
      image: require('../../assets/miniChocolateCake.jpeg'),
      price: 'Rs 550',
      dilevery: 'Rs 100 For dilevery',
      value: false,
      count: 0,
    },
    {
      title: 'Ranbow Sprinkle Cake',
      id: 7,
      image: require('../../assets/ranbowSprinkleCake.jpeg'),
      price: 'Rs 1950',
      dilevery: 'Rs 200 For dilevery',
      value: false,
      count: 0,
    },
  ]);

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
            {!item.value ? (
              <TouchableOpacity
                onPress={() => {
                  const updatedData = data.map(e =>
                    e.id === item.id ? {...e, value: !e.value} : e,
                  );
                  setData(updatedData);
                }}
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
                    marginRight: 25,
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
            ) : (
              <View
                style={{
                  marginTop: 20,
                }}>
                <InsetShadow
                  bottom={false}
                  shadowRadius={5}
                  elevation={7}
                  containerStyle={{
                    height: 20,
                    alignItems: 'center',
                    backgroundColor: '#D6FFD9',
                    borderRadius: 30,
                    flexDirection: 'row',
                    width: 73,
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      const updatedData = data.map(e =>
                        e.id === item.id ? {...e, count: e.count - 1} : e,
                      );
                      setData(updatedData);
                    }}
                    disabled={item.count === 0 ? true : false}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      {' '}
                      -{' '}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                    }}>
                    {item.count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      const updatedData = data.map(e =>
                        e.id === item.id ? {...e, count: e.count + 1} : e,
                      );
                      setData(updatedData);
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      {' '}
                      +{' '}
                    </Text>
                  </TouchableOpacity>
                </InsetShadow>
              </View>
            )}
          </View>
        )}
      />
      <View
        style={{
          height: 50,
          width: 357,
          backgroundColor: '#D6FFD9',
          marginBottom: 35,
          alignSelf: 'center',
          borderRadius: 15,
          paddingLeft: 10,
          paddingTop: 10,
        }}>
        <View
          style={{
            // alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
          <Image
            source={require('../../assets/shoppingcart.png')}
            style={{
              height: 29,
              width: 30,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              textAlign: 'left',
              marginLeft: 40,
              fontWeight: '400',
            }}>
            2 Items{'\n'}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              paddingLeft: 40,
              marginRight: 40,
            }}>
            Rs 1350
          </Text>
          <InsetShadow
            bottom={false}
            shadowRadius={5}
            elevation={7}
            containerStyle={{
              height: 20,
              alignItems: 'center',
              backgroundColor: '#D6FFD9',
              borderRadius: 30,
              flexDirection: 'row',
              width: 73,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: 7,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('App', {screen: 'PlaceOrderTwo'})
                }>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontWeight: '400',
                  }}>
                  View Cart
                </Text>
              </TouchableOpacity>
            </View>
          </InsetShadow>
        </View>
      </View>
    </View>
  );
};

export default AddCartTwo;
