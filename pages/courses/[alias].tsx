import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

interface CourseProps {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}

const firstCategory = 0;

const Course: FC<CourseProps> = ({ menu, page, products }) => {
  console.log('menu', menu);
  console.log('page', page);
  console.log('products', products);

  return <></>;
};

export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
  const menuFetchResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ firstCategory }),
  });
  const menu = await menuFetchResponse.json();

  return {
    paths: menu.flatMap((m: any) => m.pages.map((p: any) => '/courses/' + p.alias)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params)
    return {
      notFound: true,
    };

  const menuFetchResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ firstCategory }),
  });
  const menu = await menuFetchResponse.json();

  const pageFetchResponse = await fetch(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
  );
  const page = await pageFetchResponse.json();

  const productsFetchResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      category: page.category,
      limit: 10,
    }),
  });
  const products = await productsFetchResponse.json();

  return {
    props: {
      menu,
      page,
      products,
    },
  };
};
