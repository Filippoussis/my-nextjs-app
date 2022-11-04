import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>;
};

export default Header;
