import { FunctionComponent } from 'react';
import Layout from '../layouts/Layout/Layout';
import { AppContextProvider, IAppContext } from '../services/context/app.context';

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider
        menu={props.menu}
        firstCategoty={props.firstCategoty}
      >
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
