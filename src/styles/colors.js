// Nav bar red goes from: 4B2031 : 7F182E : 63192D
// Complimentary (triadic): #20314B : #182E7F : #192D63
// Lighter central colours:
//  C3CEF4 - pale
//  879CE8
//  4B6BDD - light
//  2445BC
//  182E7F - Primary
//  142667
//  OF1C4D - Dark
//  0A1333
//  05091A


export const colors = {
  primaryDark: '#0F1C4D',
  primary: '#182E7F',
  primaryLight: '#4B6BDD',
  hover: '#C3CEF4',
  secondary: '#81A4CD',
  primaryRed: '#7F182E',
  primaryRedLight: '#BF586E',
  error: '#7F182E',
  ok: '#48C625',
  cancel: '#81A4CD',
  selectedPanel: '#C3CEF4',
  backgroundGrey: '#F4F4F4',
  disabled: '#F4F4F4',
  lowLight: '#747474',
  warning: '#de911d',
  
  sectionBackground: '#E6C1C9',

  tabMenuFont: '#e4e7eb',

  notStarted: '#6C2231',  // L0 Wine
  inProgress: '#0B4F6C',  // L2 Blue Sapphire
  forReview: '#F58B00',   // L3 Green
  forApproval: '#BA5C12', // L4 Orange
  approved: '#00B884',    // l1 Olive Green
  closed: '#1C2E7A',      // L6 Blue

  deleted: '#EFA9B8',     // light red
  changed: '#F4D9AF',     // light mustard
  new:     '#A9EFE0',     // light green

  'blue900': '#035388',
  'blue800': '#0b69a3',
  'blue700': '#127fbf',
    'blue600': '#182E7F',
  'blue500': '#2bb0ed',
  'blue400': '#40c3f7',
  'blue300': '#5ed0fa',
  'blue200': '#81defd',
  'blue100': '#b3ecff',
  'blue50': '#e3f8ff',
  'red900': '#610316',
  'red800': '#8a041a',
  'red700': '#ab091e',
  'red600': '#cf1124',
  'red500': '#e12d39',
  'red400': '#ef4e4e',
  'red300': '#f86a6a',
  'red200': '#ff9b9b',
  'red100': '#ffbdbd',
  'red50': '#ffe3e3',
  'mono800': '#323f4b',
  'mono900': '#1f2933',
  'mono700': '#3e4c59',
  'mono600': '#52606d',
  'mono400': '#7b8794',
  'mono500': '#616e7c',
  'mono300': '#9aa5b1',
  'mono200': '#cbd2d9',
  'mono100': '#e4e7eb',
  'mono60': '#f6f7f9',
  'mono50': '#f5f7fa',
  'mono10': '#fdfdfd',
  'yellow900': '#8d2b0b',
  'yellow800': '#b44d12',
  'yellow600': '#de911d',
  'yellow700': '#cb6e17',
  'yellow500': '#f0b429',
  'yellow400': '#f7c948',
  'yellow300': '#fadb5f',
  'yellow200': '#fce588',
  'yellow100': '#fff3c4',
  'yellow50': '#fffbea',
  'green900': '#014d40',
  'green800': '#0c6b58',
  'green700': '#147d64',
  'green600': '#199473',
  'green500': '#27ab83',
  'green400': '#3ebd93',
  'green300': '#65d6ad',
  'green200': '#8eedc7',
  'green100': '#c6f7e2',
  'green50': '#effcf6',
  'grey900': '#222222',
  'grey800': '#3b3b3b', // use same as #373737
  'grey700': '#515151',
  'grey600': '#626262',
  'grey500': '#7e7e7e',
  'grey400': '#9e9e9e',
  'grey300': '#b1b1b1',
  'grey200': '#cfcfcf',
  'grey100': '#e1e1e1',
  'grey80': '#e3e3e3',
  'grey50': '#f7f7f7',
};

export const analysisStatusColor = {
  'level0-main': colors['mono100'],
  'level0-secondary': colors['grey800'],
  'level1-main': colors['green500'],
  'level1-secondary': colors['green700'],
  'level2-main': colors['green300'],
  'level2-secondary': colors['green500'],
  'level3-main': colors['yellow400'],
  'level3-secondary': colors['yellow700'],
  'level4-main': colors['red300'],
  'level4-secondary': colors['red400'],
  'level5-main': colors['red600'],
  'level5-secondary': colors['red600'],
};

export default colors;
