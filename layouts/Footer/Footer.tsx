import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer
      className={cn(className, styles.footer)}
      {...props}
    >
      <span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
      <span>Пользовательское соглашение</span>
      <span>Политика конфиденциальности</span>
    </footer>
  );
};

export default Footer;
