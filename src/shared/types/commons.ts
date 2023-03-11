export interface BaseProps {
  children: React.ReactNode;
}

export type Sizes = 'small' | 'base' | 'medium' | 'large';
export type Devices = 'mobile' | 'tablet' | 'desktop';
export type Colors =
  | 'transparent'
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'lighter-dark'
  | 'white'
  | 'black';
