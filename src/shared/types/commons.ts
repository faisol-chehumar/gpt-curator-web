type TestId = string;

export interface BaseProps {
  children: React.ReactNode;
  testId?: TestId;
}

export enum Sizes {
  NONE = 'NONE',
  SMALL = 'SMALL',
  BASE = 'BASE',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}
export enum Spaces {
  NONE = 'none',
  SMALL = 'small',
  BASE = 'base',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export enum NegativeSpaces {
  SMALL = 'SMALL',
  BASE = 'BASE',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}
export enum Devices {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}
export enum Colors {
  TRANSPARENT = 'transparent',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARKER_DARK = 'darker-dark',
  DARK = 'dark',
  LIGHTER_DARK = 'lighter-dark',
  WHITE = 'white',
  BLACK = 'black',
}

export enum Positions {
  TOP_RIGHT = 'top-right',
  BASE = 'base',
  // ABSOLUTE = 'absolute',
  // STATIC = 'static',
  // RELATIVE = 'relative',
  // FIXED = 'fixed',
  // STICKY = 'sticky',
}
