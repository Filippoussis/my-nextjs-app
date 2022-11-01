import { FC } from 'react';
import cn from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag: FC<TagProps> = ({ children, size = 'm', className, ...props }) => {
  return (
    <div
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
    </div>
  );
};
