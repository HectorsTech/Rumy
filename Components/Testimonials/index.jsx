import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import TestimonialesCard from '@/Components/TestimonialesCard';

export default function Testimonials() {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <section>
      <div className="text-center my-8">
        <h3 className="text-base font-medium text-secondary">
          ¿Qué dicen los estudiantes sobre
          <span className="font-bold text-primary"> Rumy</span>?
        </h3>
        <h2 className="text-4xl font-bold text-accent">Testimonios</h2>
      </div>

      <Slider {...settings}>
        <div>
          <TestimonialesCard
            name={'juanita Pelaez'}
            comment={
              'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. '
            }
            image={
              'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
            }
          />
        </div>
        <div>
          <TestimonialesCard
            name={'juanita Pelaez'}
            comment={
              'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
            image={
              'https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp'
            }
            isMid={true}
          />
        </div>
        <div>
          <TestimonialesCard
            name={'Tatiana Peralta'}
            comment={'Rumy es felcidad'}
            image={
              'https://images.hola.com/imagenes/estar-bien/20221018219233/buenas-personas-caracteristicas/1-153-242/getty-chica-feliz-t.jpg?tx=w_680'
            }
            isMid={true}
          />
        </div>
        <div>
          <TestimonialesCard
            name={'juanita Pelaez'}
            comment={
              'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
            image={
              'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
            }
            isMid={true}
          />
        </div>
        <div>
          <TestimonialesCard
            name={'juanita Pelaez'}
            comment={
              'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
            image={
              'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
            }
            isMid={true}
          />
        </div>
        <div>
          <TestimonialesCard
            name={'juanita Pelaez'}
            comment={
              'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
            image={
              'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
            }
          />
        </div>
      </Slider>
    </section>
  );
}

{
  /* <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */
}

{
  /* <section>
        <div className="text-center my-8">
          <h3 className="text-base font-medium text-secondary">
            ¿Qué dicen los estudiantes sobre
            <span className="font-bold text-primary"> Rumy</span>?
          </h3>
          <h2 className="text-4xl font-bold text-accent">Testimonios</h2>
        </div>

       
        <div class="">
          <TestimonialesCard
            name={'juanita Pelaez'}
            comment={
              'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
            image={
              'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
            }
          />
          
          <div className="mt-5 mx-auto w-44 flex justify-between items-center">
            <button className="w-11 aspect-square rounded-full bg-accent hover:bg-accent/75"></button>
            <span className="text-xl font-medium">01/02</span>
            <button className="w-11 aspect-square rounded-full border-solid border-2 border-accent hover:bg-gray-50"></button>
          </div>
          
        </div>
        
      </section>
 */
}
