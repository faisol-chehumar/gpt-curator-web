import * as React from 'react';
import classNames from 'classnames';

import { Colors, Sizes } from '@/shared/types/commons';

import { SvgProps } from './types';
import { SVG_FILL_COLORS, SVG_SIZES } from './classMappings';

const RightArrowSvg: React.FC<SvgProps> = ({
  color = Colors.BLACK,
  size = Sizes.LARGE,
}) => {
  const svgClasses = classNames(SVG_SIZES[size]);
  const pathClasses = classNames(SVG_FILL_COLORS[color]);

  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={svgClasses}>
      <path
        d="M14.83 11.29l-4.24-4.24a1 1 0 00-1.42 0 1 1 0 000 1.41L12.71 12l-3.54 3.54a1 1 0 000 1.41 1 1 0 00.71.29 1 1 0 00.71-.29l4.24-4.24a1 1 0 000-1.42z"
        className={pathClasses}
      />
    </svg>
  );
};

const MemoRightArrowSvg = React.memo(RightArrowSvg);
export default MemoRightArrowSvg;
