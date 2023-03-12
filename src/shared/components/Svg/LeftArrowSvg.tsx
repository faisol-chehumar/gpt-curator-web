import classNames from 'classnames';
import * as React from 'react';

import { Colors, Sizes } from '@/shared/types/commons';

import { SVG_FILL_COLORS, SVG_SIZES } from './classMappings';
import { SvgProps } from './types';

const LeftArrowSvg: React.FC<SvgProps> = ({
  color = Colors.BLACK,
  size = Sizes.LARGE,
}) => {
  const svgClasses = classNames(SVG_SIZES[size]);
  const pathClasses = classNames(SVG_FILL_COLORS[color]);

  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={svgClasses}>
      <path
        className={pathClasses}
        d="M11.29 12l3.54-3.54a1 1 0 000-1.41 1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41z"
      />
    </svg>
  );
};

const MemoLeftArrowSvg = React.memo(LeftArrowSvg);
export default MemoLeftArrowSvg;
