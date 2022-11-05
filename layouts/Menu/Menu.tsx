import cn from 'classnames';
import { FC, useContext } from 'react';
import { BooksIcon, CoursesIcon, GoodsIcon, ServicesIcon } from '../../components/Icons';
import { FirstLevelMenuItem, MenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { AppContext } from '../../services/context/app.context';

import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <GoodsIcon />,
    id: TopLevelCategory.Goods,
  },
];

const Menu: FC = () => {
  const { menu, firstCategory } = useContext(AppContext);
  console.log('menu', menu);
  console.log('firstCategory', firstCategory);

  const buildFirstLevel = () => {
    const items = firstLevelMenu.map((el) => {
      return (
        <div key={el.route}>
          <>
            <a
              className={cn(styles.firstLevelLink, {
                [styles.firstLevelLinkActive]: el.id === firstCategory,
              })}
              href={`/${el.route}`}
            >
              {el.icon}
              <span>{el.name}</span>
            </a>
            {el.id === firstCategory && buildSecondLevel()}
          </>
        </div>
      );
    });

    return items;
  };

  const buildSecondLevel = () => {
    const items = menu.map((el) => {
      return (
        <div key={el._id.secondCategory}>
          <>
            <span className={styles.secondLevelLink}>{el._id.secondCategory}</span>
            {buildThirdLevel(el.pages)}
          </>
        </div>
      );
    });

    return <div className={styles.secondLevel}>{items}</div>;
  };

  const buildThirdLevel = (pages: PageItem[]) => {
    const items = pages.map((el) => {
      return (
        <div key={el.alias}>
          <span className={styles.thirdLevelLink}>{el.category}</span>
        </div>
      );
    });
    return items;
  };

  return <>{buildFirstLevel()}</>;
};

export default Menu;
