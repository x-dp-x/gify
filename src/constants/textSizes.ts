interface textSizesTypes {
  [key: string]: {
    fs: number;
    lh: number;
  };
}

export const textSizes = {
  small: { fs: 16, lh: 20 },
  medium: { fs: 20, lh: 26 },
  large: { fs: 24, lh: 32 },
} as textSizesTypes;
