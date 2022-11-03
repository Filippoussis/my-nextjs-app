import { BooksIcon, CoursesIcon, ProductsIcon, ServicesIcon } from '../Icons';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
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
    id: TopLevelCategory.Servises,
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
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
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
