import { MouseEvent } from 'react';

import { PropsWithChildren } from '@/shared/types/commons';

export interface BaseButtonProps extends PropsWithChildren {
  onClick: () => void;
}
