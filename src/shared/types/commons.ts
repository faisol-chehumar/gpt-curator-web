export interface BaseProps {
  children: React.ReactNode;
  testId?: string;
}

export type Sizes = 'small' | 'base' | 'medium' | 'large';
export type Devices = 'mobile' | 'tablet' | 'desktop';
export type Colors =
  | 'transparent'
  | 'primary'
  | 'secondary'
  | 'darker-dark'
  | 'dark'
  | 'lighter-dark'
  | 'white'
  | 'black';
