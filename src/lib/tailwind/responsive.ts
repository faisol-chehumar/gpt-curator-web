type Breakpoints = 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Responsive<T> = T | Partial<Record<Breakpoints, T>>;

export type { Breakpoints, Responsive };
