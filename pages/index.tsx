import { Button } from '../components/Button/Button';
import { Htag } from '../components/Htag/Htag';

export default function Home() {
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
    </>
  );
}
