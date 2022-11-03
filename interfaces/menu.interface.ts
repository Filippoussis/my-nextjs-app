import { TopLevelCategory } from './page.interface';

interface PageItem {
  _id: string;
  alias: string;
  title: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}
