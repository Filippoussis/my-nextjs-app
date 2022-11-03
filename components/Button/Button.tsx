import { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import { ArrowIcon } from '../Icons';

import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({ children, appearance, icon }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
        [styles.icon]: icon,
      })}
    >
      {children}
      {icon && <ArrowIcon />}
    </button>
  );
};
