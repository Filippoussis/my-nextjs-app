import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>) => {
  const [stateMenu] = useState<MenuItem[]>(menu);
  return (
    <AppContext.Provider value={{ menu: stateMenu, firstCategory }}>{children}</AppContext.Provider>
  );
};
