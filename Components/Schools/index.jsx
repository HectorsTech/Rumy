import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Image.module.css';

import Image from 'next/image';

import Slider from 'react-slick';

export default function Schools() {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <section>
      <h2 className="text-center p-5 mt-5 text-xl font-semibold text-accent">
        Las mejores viviendas cerca de las mejores escuelas
      </h2>

      <div className="flex justify-center items-center">
        <Slider {...settings}>
          <div>
            <Image
              src={'/escuelas/ipn.webp'}
              alt="Hola"
              width={64}
              height={64}
              className={`object-cover ` + styles.school}
            />
          </div>
          <div>
            <Image
              src={'/escuelas/ipn.webp'}
              alt="Hola"
              width={64}
              height={64}
              className={`object-cover ` + styles.school}
            />
          </div>
          <div>
            <Image
              src={'/escuelas/ipn.webp'}
              alt="Hola"
              width={64}
              height={64}
              className={`object-cover ` + styles.school}
            />
          </div>
          <div>
            <Image
              src={'/escuelas/ipn.webp'}
              alt="Hola"
              width={64}
              height={64}
              className={`object-cover ` + styles.school}
            />
          </div>
          <div>
            <Image
              src={'/escuelas/ipn.webp'}
              alt="Hola"
              width={64}
              height={64}
              className={`object-cover ` + styles.school}
            />
          </div>
          <div>
            <Image
              src={'/escuelas/ipn.webp'}
              alt="Hola"
              width={64}
              height={64}
              className={`object-cover ` + styles.school}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}
