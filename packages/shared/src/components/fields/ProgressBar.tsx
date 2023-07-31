import React, { MeterHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';

interface ProgressBarProps extends MeterHTMLAttributes<HTMLMeterElement> {
  percentage: number;
  className?: string;
}

export function ProgressBar({
  percentage,
  className,
}: ProgressBarProps): ReactElement {
  return (
    <meter
      className={classNames(
        'absolute left-0 h-1 bg-theme-color-cabbage transition-[width] appearance-none',
        className,
      )}
      style={{ width: `${percentage}%` }}
    />
  );
}