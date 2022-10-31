import { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'secondary';
  icon?: Boolean;
}
