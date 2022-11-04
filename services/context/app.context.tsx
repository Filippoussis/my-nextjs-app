import { createContext, ReactNode, useState } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategoty: TopLevelCategory;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategoty: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategoty,
  children,
}: IAppContext & { children: ReactNode }) => {
  const [stateMenu] = useState<MenuItem[]>(menu);
  return (
    <AppContext.Provider value={{ menu: stateMenu, firstCategoty }}>{children}</AppContext.Provider>
  );
};
