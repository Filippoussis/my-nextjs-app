import { FC, useContext } from 'react';
import { BooksIcon, CoursesIcon, GoodsIcon, ServicesIcon } from '../../components/Icons';
import { FirstLevelMenuItem, MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { AppContext } from '../../services/context/app.context';

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
  const { menu, firstCategoty } = useContext(AppContext);
  console.log('menu', menu);

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

  return <>{buildFirstLevel()}</>;
};

export default Menu;
