import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/HomeScreen';
import {COLORS} from '../../style/theme';
import ScanScreen from '../../screens/ScanScreen';

const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {borderTopWidth: 0, height: 50},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={COLORS.primary}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="scan-helper"
              color={COLORS.primary}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              color={COLORS.primary}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default tabs;
