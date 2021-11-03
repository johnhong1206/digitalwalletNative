import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZE} from '../style/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectArea, setselectArea] = useState(null);
  const [modelVisible, setmodelVisible] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });
        setAreas(areaData);
        if (areaData.length > 0) {
          let defaultData = areaData.filter(a => a.code == 'MY');
          if (defaultData.length > 0) {
            setselectArea(defaultData[0]);
          }
        }
      });
  }, []);

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZE.padding * 5,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: SIZE.largeTitle * 0.7,
            width: '100%',
            color: COLORS.white,
            textAlign: 'center',
          }}>
          Zong Hong Digital Wallet
        </Text>
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZE.padding * 3,
          marginHorizontal: SIZE.padding * 3,
        }}>
        <View
          style={{
            marginTop: SIZE.padding * 3,
          }}>
          <Text style={{color: COLORS.lightgreen, ...FONTS.body3}}>
            Full Name
          </Text>
          <TextInput
            style={{
              marginVertical: SIZE.padding,
              borderBottom: COLORS.white,
              borderBottomWidth: 1,
              color: COLORS.white,
              height: 40,
              ...FONTS.body3,
            }}
            placeholder="Please Enter Full Name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        <View
          style={{
            marginTop: SIZE.padding * 2,
          }}>
          <Text style={{color: COLORS.lightgreen, ...FONTS.body3}}>
            Phone Number
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body2,
              }}
              onPress={() => setmodelVisible(true)}>
              <View style={{justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={20}
                  color={COLORS.white}
                />
              </View>

              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Image
                  source={{
                    uri: selectArea?.flag,
                  }}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Text style={{color: COLORS.white, ...FONTS.body3}}>
                  {selectArea?.callingCode}
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZE.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
              }}
            />
          </View>
        </View>
        <View style={{marginTop: SIZE.padding * 2}}>
          <Text style={{color: COLORS.lightgreen, ...FONTS.body3}}>
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZE.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              flex: 1,
              ...FONTS.body3,
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <MaterialCommunityIcons
                name="eye"
                size={20}
                color={COLORS.white}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-off"
                size={20}
                color={COLORS.white}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{margin: SIZE.padding * 3}}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZE.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZE.padding * 2,
          paddingHorizontal: SIZE.padding * 2,
        }}
        onPress={() => alert('signup')}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={36}
          color={COLORS.white}
        />
        <Text
          style={{
            marginLeft: SIZE.padding * 2,
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  }

  function renderAreaCode() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZE.padding,
            flexDirection: 'row',
          }}
          onPress={() => {
            setselectArea(item);
            setmodelVisible(false);
          }}>
          <Image
            source={{uri: item.flag}}
            style={{
              width: 30,
              height: 30,
              marginRight: 30,
            }}
          />
          <Text style={{...FONTS.body4}}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modelVisible}>
        <TouchableWithoutFeedback onPress={() => setmodelVisible(false)}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View
              style={{
                height: 400,
                width: SIZE.width * 0.8,
                backgroundColor: COLORS.lightgreen,
                borderRadius: SIZE.radius,
              }}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={item => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZE.padding * 2,
                  marginBottom: SIZE.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={styles.linearGradient}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
      {renderAreaCode()}
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
