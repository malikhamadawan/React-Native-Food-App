/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const PaymentType = () => {
  const [image, setImage] = useState(false);
  console.log('image:', image);
  const [image1, setImage1] = useState(false);
  console.log('image1:', image1);
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
          paddingVertical: 30,
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
          Payment Type
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setImage(!image);
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: '#D6FFD9',
          width: 345,
          height: 44,
          alignItems: 'center',
          marginLeft: 23,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 1,
            height: 3,
          },
        }}>
        <Image
          source={
            image
              ? require('../../assets/checkFill.png')
              : require('../../assets/ellipse198.png')
          }
          style={{
            height: 30,
            width: 30,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            paddingHorizontal: 20,
          }}>
          Cash On delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setImage1(!image1);
        }}
        style={{
          flexDirection: 'row',
          marginTop: 20,
          backgroundColor: '#D6FFD9',
          width: 345,
          height: 44,
          alignItems: 'center',
          marginLeft: 23,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 1,
            height: 3,
          },
        }}>
        <Image
          source={
            image1
              ? require('../../assets/checkFill.png')
              : require('../../assets/ellipse198.png')
          }
          style={{
            height: 30,
            width: 30,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            paddingHorizontal: 20,
          }}>
          Online payment
        </Text>
      </TouchableOpacity>
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
            textAlign: 'left',
          }}>
          Rs 1350
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 72,
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
            textAlign: 'right',
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
          Rs 1550
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          backgroundColor: '#D6FFD9',
          width: 345,
          height: 44,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 23,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 1,
            height: 3,
          },
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '200',
            paddingHorizontal: 8,
          }}>
          Card number
        </Text>
        <TextInput
          style={{
            fontWeight: '200',
            paddingHorizontal: 8,
          }}
          placeholder="**** **** **** ****"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          backgroundColor: '#D6FFD9',
          width: 345,
          height: 44,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 23,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 1,
            height: 3,
          },
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '200',
            paddingHorizontal: 8,
          }}>
          Expiry date
        </Text>
        <TextInput
          style={{
            fontWeight: '200',
            paddingHorizontal: 8,
          }}
          placeholder="MM/YY"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          backgroundColor: '#D6FFD9',
          width: 345,
          height: 44,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 23,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 1,
            height: 3,
          },
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '200',
            paddingHorizontal: 8,
          }}>
          Card holder
        </Text>
        <TextInput
          style={{
            fontWeight: '200',
            paddingHorizontal: 8,
          }}
          placeholder="Name of the card"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          backgroundColor: '#D6FFD9',
          width: 345,
          height: 44,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 23,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 1,
            height: 3,
          },
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '200',
            paddingHorizontal: 8,
          }}>
          Security code
        </Text>
        <TextInput
          style={{
            fontWeight: '200',
            paddingHorizontal: 8,
          }}
          placeholder="CVC/CCV"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <TouchableOpacity
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
            DONE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentType;
