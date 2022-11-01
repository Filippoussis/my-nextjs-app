import { HTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3';
}
