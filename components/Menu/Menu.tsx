import { FC } from 'react';
import { BooksIcon, CoursesIcon, GoodsIcon, ServicesIcon } from '../Icons';
import { FirstLevelMenuItem, MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

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

export const Menu = () => {
  const buildFirstLevel = () => {
    const items = firstLevelMenu.map((el) => {
      <div key={el.route}>
        <a href={`/${el.route}`}>
          <div>
            {el.icon}
            <span>{el.name}</span>
          </div>
        </a>
      </div>;
    });
    return items;
  };

  return buildFirstLevel();
};
