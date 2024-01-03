import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
const Setting = () => {
  const [image, setImage] = useState();
  const onSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: '20%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: 30,
        }}>
        <Image
          // resizeMode="contain"
          source={{uri: image}}
          style={{
            height: 150,
            width: 150,
            backgroundColor: '#4444',
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          onPress={onSelectImage}
          style={{
            height: 10,
            width: 10,
            position: 'absolute',
            bottom: 70,
            marginLeft: '22%',
          }}>
          <Image
            source={require('../../assets/cameraIcon.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          // height: 100,
          width: '100%',
          // backgroundColor: 'red',
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#D6FFD9',
          marginTop: '10%',
          paddingHorizontal: 15,
          borderRadius: 10,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 2,
            height: 3,
          },
        }}>
        <Image
          source={require('../../assets/fda4.png')}
          style={{
            height: 19,
            width: 17,
            position: 'absolute',
            marginLeft: 10,
          }}></Image>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            paddingRight: 40,
            marginLeft: 20,
          }}
          placeholder="Name"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          // height: 100,
          width: '100%',
          // backgroundColor: 'red',
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#D6FFD9',
          marginTop: '10%',
          paddingHorizontal: 15,
          borderRadius: 10,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 2,
            height: 3,
          },
        }}>
        <Image
          source={require('../../assets/phone1.png')}
          style={{
            height: 40,
            width: 17,
            position: 'absolute',
            marginLeft: 9,
          }}></Image>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            paddingRight: 40,
            marginLeft: 20,
            // backgroundColor: 'blue',
          }}
          placeholder="Phone Number"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          // height: 100,
          width: '100%',
          // backgroundColor: 'red',
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#D6FFD9',
          marginTop: '10%',
          paddingHorizontal: 15,
          borderRadius: 10,
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 2,
            height: 3,
          },
        }}>
        <Image
          source={require('../../assets/fi-sr-envelope.png')}
          style={{
            height: 19,
            width: 19,
            position: 'absolute',
            marginLeft: 10,
          }}></Image>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            paddingRight: 40,
            marginLeft: 20,

            // backgroundColor: 'blue',
          }}
          placeholder="E-mail"
          placeholderTextColor="grey"
        />
      </View>
      <TouchableOpacity
        style={{
          width: 151,
          height: 64,
          backgroundColor: '#024220',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20%',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            color: 'white',
            textAlign: 'center',
          }}>
          Save
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '25%',
        }}>
        <Image
          source={require('../../assets/google1.png')}
          style={{
            height: 55,
            width: 55,
            marginRight: 15,
          }}
        />
        <Image
          source={require('../../assets/fb1.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>
  );
};
export default Setting;
