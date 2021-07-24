const defaultStyles = {
  spacing: 8,
};

export const light = {
  ...defaultStyles,
  background: {
    blue: '#2291ff',
    grey: '#f3f9ff',
    white: '#ffffff',
  },
  text: {
    blue: '#2291ff',
    black: '#283b4c',
    grey: '#617c86',
    white: '#ffffff',
  },
  icon: {
    blue: '#399cff',
    black: '#274550',
    grey: '#dce0e3',
    white: '#ffffff',
  },
};

export const dark = {
  ...defaultStyles,
  background: {
    blue: '#000',
    grey: '#f3f9ff',
    white: '#ffffff',
  },
  text: {
    blue: '#45a2ff',
    black: '#283b4c',
    grey: '#617c86',
    white: 'red',
  },
  icon: {
    blue: '#399cff',
    black: '#274550',
    grey: '#dce0e3',
    white: '#ffffff',
  },
};
