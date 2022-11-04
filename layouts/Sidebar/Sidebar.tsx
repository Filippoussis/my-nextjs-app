import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Sidebar;
