export const myTheme = {
  colors: {
    red01: '#ff4183',
    yellow01: '#fdd162',
    skyBlue01: '#a3d6ee',
    skyBlue02: '#6bccf6',

    victoriusBlue: '#2321aa',
    victoriusPurple: '#7f3be7',

  },
};

type AppThemes = {
  myTheme: typeof myTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
