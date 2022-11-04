import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import Menu from '../Menu/Menu';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
