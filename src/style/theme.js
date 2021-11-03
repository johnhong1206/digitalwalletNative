import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  //base colors
  primary: '#24c168',
  secondary: '#0c381F',

  green: '#66D59A',
  lightgreen: '#E6FEF0',

  lime: '#00BA63',
  emerald: '#2BC978',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3EC9',
  lightPurple: '#F3EFFF',

  yellow: '#FFC664',
  lightYellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightgray: '#FCFBFC',
  gray: '#C1C3C5',
  dargGray: '#C3C6C7',
};

export const SIZE = {
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontfamily: 'Roboto-regular',
    fontSize: SIZE.largeTitle,
    lineHeight: 40,
  },
  h1: {fontfamily: 'Roboto-Black', fontSize: SIZE.h1, lineHeight: 36},
  h2: {fontfamily: 'Roboto-Bold', fontSize: SIZE.h2, lineHeight: 30},
  h3: {fontfamily: 'Roboto-Bold', fontSize: SIZE.h3, lineHeight: 22},
  h4: {fontfamily: 'Roboto-Bold', fontSize: SIZE.h4, lineHeight: 22},
  body1: {fontfamily: 'Roboto-regular', fontSize: SIZE.body1, lineHeight: 36},
  body2: {fontfamily: 'Roboto-regular', fontSize: SIZE.body2, lineHeight: 30},
  body3: {fontfamily: 'Roboto-regular', fontSize: SIZE.body3, lineHeight: 22},
  body4: {fontfamily: 'Roboto-regular', fontSize: SIZE.body4, lineHeight: 22},
  body5: {fontfamily: 'Roboto-regular', fontSize: SIZE.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZE, FONTS};

export default appTheme;
