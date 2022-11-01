import { FC } from 'react';
import cn from 'classnames';
import { TextProps } from './Text.props';
import styles from './Text.module.css';

export const Text: FC<TextProps> = ({ children, size = 'm', className, ...props }) => {
  return (
    <p
      className={cn(
        styles.body,
        {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
          [styles.l]: size === 'l',
        },
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
