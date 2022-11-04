import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Button } from '../components/Button/Button';
import { Htag } from '../components/Htag/Htag';
import { Text } from '../components/Text/Text';
import { BooksIcon, CoursesIcon, GoodsIcon, ServicesIcon } from '../components/Icons';

import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps {
  menu: MenuItem[];
  firstCategory: number;
}

const Home: FC<HomeProps> = ({ menu }) => {
  console.log('menu', menu);

  return (
    <>
      <Htag tag='h1'>Hello, World!</Htag>
      <Button
        appearance='primary'
        icon
      >
        Узнать подробнее
      </Button>
      <Button
        appearance='secondary'
        icon
      >
        Читать отзывы
      </Button>
      <Text>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft
        skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами,
        разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Text>
      <Text size='s'>
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым
        сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого
        популярного в программировании. Выбор мой пал на эту профессию еще и потому, что
        Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по
        многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей
        сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу
        отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой
        разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в
        трудоустройстве!
      </Text>
      <Text size='l'>
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно
        пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так
        зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение,
        поэтому дизайнеры ищут его в разных местах.
      </Text>
      <div>
        <CoursesIcon />
        <ServicesIcon />
        <BooksIcon />
        <GoodsIcon />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const menuFetchResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ firstCategory }),
  });
  const menu = await menuFetchResponse.json();

  return {
    props: {
      menu,
    },
  };
};
