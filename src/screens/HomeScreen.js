import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, SIZE} from '../style/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const featuresData = [
    {
      id: 1,
      icon: 'reload',
      color: COLORS.purple,
      backgroundColor: COLORS.lightPurple,
      description: 'Top Up',
    },
    {
      id: 2,
      icon: 'send',
      color: COLORS.yellow,
      backgroundColor: COLORS.lightYellow,
      description: 'Transfer',
    },
    {
      id: 3,
      icon: 'earth',
      color: COLORS.primary,
      backgroundColor: COLORS.lightgreen,
      description: 'Transfer',
    },
    {
      id: 4,
      icon: 'wallet',
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Wallet',
    },
    {
      id: 5,
      icon: 'receipt',
      color: COLORS.yellow,
      backgroundColor: COLORS.lightYellow,
      description: 'Bill',
    },
    {
      id: 6,
      icon: 'google-controller',
      color: COLORS.primary,
      backgroundColor: COLORS.lightgreen,
      description: 'Game',
    },
    {
      id: 7,
      icon: 'cellphone',
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Mobile Prepaid',
    },
    {
      id: 8,
      icon: 'dots-horizontal',
      color: COLORS.purple,
      backgroundColor: COLORS.lightPurple,
      description: 'More',
    },
  ];

  const specialPromoData = [
    {
      id: 1,
      img:
        'https://assets.grab.com/wp-content/uploads/sites/8/2020/10/16173646/CMCO_Oct_GrabPay_Detailpage1200x660px.jpg',
      title: 'Bonus CashBask1',
      description: 'Dont miss it, Grab it now',
    },
    {
      id: 2,
      img:
        'https://assets.grab.com/wp-content/uploads/sites/8/2020/03/21112420/LMMY1581-The-M2U-Top-Up-Challenge-R2_promo-page-banner-1440x600-edited.jpg',
      title: 'Bonus CashBask2',
      description: 'Dont miss it, Grab it now',
    },
    {
      id: 3,
      img:
        'https://i.pinimg.com/736x/bf/52/2f/bf522f4d9f17a2044f64647c5311813f.jpg',
      title: 'Bonus CashBask3',
      description: 'Dont miss it, Grab it now',
    },
    {
      id: 4,
      img:
        'https://assets.grab.com/wp-content/uploads/sites/8/2020/10/16173646/CMCO_Oct_GrabPay_Detailpage1200x660px.jpg',
      title: 'Bonus CashBask4',
      description: 'Dont miss it, Grab it now',
    },
  ];

  const [features, setFeatures] = useState(featuresData);
  const [specialPromos, setSpecialPromos] = useState(specialPromoData);

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', marginVertical: SIZE.padding * 2}}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h1}}>Hello</Text>
          <Text style={{...FONTS.body2, color: COLORS.gray}}>User</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.lightgray,
            }}>
            <MaterialCommunityIcons
              name="bell"
              size={20}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 120,
          borderRadius: 20,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{...FONTS.h3, color: COLORS.lightgreen, fontWeight: '700'}}>
          Go Premium
        </Text>
        <Text style={{...FONTS.body3, color: COLORS.lightgreen}}>
          Upgrade to Premium Get more Profit now
        </Text>
      </View>
    );
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{marginBottom: SIZE.padding * 2}}>
        <Text style={{...FONTS.h3}}>Features</Text>
      </View>
    );
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZE.padding * 2,
          width: 60,
          alignItems: 'center',
        }}
        onPress={() => alert(`${item.description}`)}>
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons
            name={item.icon}
            size={20}
            color={item.color}
          />
        </View>
        <Text style={{textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4}}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{marginTop: SIZE.padding * 2}}
      />
    );
  }

  function renderPromoHeader() {
    return (
      <View style={{flexDirection: 'row', marginBottom: SIZE.padding}}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h3}}>Special Promos</Text>
        </View>
        <TouchableOpacity onPress={() => alert('special Promo')}>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderPromos() {
    const HeaderComponent = () => {
      return (
        <View>
          {renderHeader()}
          {renderBanner()}
          {renderFeatures()}
          {renderPromoHeader()}
        </View>
      );
    };

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZE.base,
          width: SIZE.width / 2.5,
        }}
        onPress={() => alert(`${item.title}`)}>
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={{
              uri: item.img,
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 2,
            }}
          />
        </View>
        <View
          style={{
            padding: SIZE.padding,
            color: COLORS.lightgray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{...FONTS.h4}}>{item.title}</Text>
          <Text style={{...FONTS.body4}}> {item.description}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{
          paddingHorizontal: SIZE.padding * 3,
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={specialPromos}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default HomeScreen;
