import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {COLORS, FONTS, SIZE} from '../style/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScanScreen = ({navigation}) => {
  const cameraRef = useRef(null);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZE.padding * 4,
          paddingHorizontal: SIZE.padding * 3,
        }}>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="close" size={20} color={COLORS.white} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            Scan For Pyment
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 10,
            backgroundColor: COLORS.green,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('info')}>
          <MaterialCommunityIcons
            name="information"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderPaymentMethods() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          padding: SIZE.padding * 3,
          borderTopLeftRadius: SIZE.radius,
          borderTopRightRadius: SIZE.radius,
          backgroundColor: COLORS.white,
        }}>
        <Text>Another Payment Method</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: SIZE.padding * 2,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => console.log('PhoneNumber')}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightPurple,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons
                name="cellphone"
                size={25}
                color={COLORS.secondary}
              />
            </View>
            <Text style={{marginLeft: SIZE.padding, ...FONTS.body4}}>
              Phone Number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: SIZE.padding * 3,
            }}
            onPress={() => console.log('barcode')}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightgreen,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons
                name="barcode-scan"
                size={25}
                color={COLORS.secondary}
              />
            </View>
            <Text style={{marginLeft: SIZE.padding, ...FONTS.body4}}>
              Barcode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderScanFocus() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderColor: 'orange',
            borderWidth: 1,
            marginTop: '-55%',
            width: 200,
            height: 300,
          }}></View>
      </View>
    );
  }

  function onBarCodeRead(result) {
    alert(`${result.data}`);
    console.warn(`${result.data}`);
  }

  return (
    <View style={{flex: 1, backgroundColor: 'transpatent'}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={onBarCodeRead}
        androidCameraPermissionOptions={{
          title: 'Permission to use Camera',
          message: 'Camera is required for barcode scanning',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        }}>
        {renderHeader()}
        {renderScanFocus()}
        {renderPaymentMethods()}
      </RNCamera>
    </View>
  );
};

export default ScanScreen;
