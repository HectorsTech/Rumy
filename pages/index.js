import Image from 'next/image';

import TestimonialesCard from '@/Components/TestimonialesCard';

export default function Home() {
  return (
    <main>
      {/* MOISÉS */}

      {/* /////////////////////// INFO //////////////// */}
      <section className="md:flex md:flex-col lg:flex-row justify-center items-center lg:items-start gap-2 px-5 md:px-16">
        {/* IMAGENES */}
        <div
          s
          className="hidden lg:me-5 md:grid grid-cols-2 gap-3 w-[616px]"
        >
          <Image
            src={'/rumy1.png'}
            width={616}
            height={300}
            alt="Cuarto"
            className="col-span-2"
          />
          <Image
            src={'/rumy2.png'}
            width={308}
            height={300}
            alt="Cuarto"
          />
          <Image
            src={'/rumy3.png'}
            width={308}
            height={300}
            alt="Cuarto"
          />
        </div>
        {/* IMAGENES */}
        <div className="xl:ms-16 xl:w-[616px] flex flex-col">
          <div className="text-center lg:text-justify">
            <h3 className="text-base font-medium text-secondary mb-3 mt-8 lg:mt-0">
              Acerca de nosotros
            </h3>
            <h2 className="text-4xl font-bold text-accent">
              ¿Qué nos hace ser
              <span className="font-bold text-primary"> Rumy</span>?
            </h2>
          </div>
          <div className="text-darkText text-center lg:text-start text-xl font-medium p-3 xl:my-8">
            <p>
              Pensamos en las personas que deciden rentar su propiedad para que
              su proceso sea menos tedioso.
            </p>
            <p className="my-3">
              Nos encargamos de solo recibir estudiantes para un proceso más
              seguro.
            </p>
            <p>
              Validamos y verificamos los datos al entrar en nuestra aplicación.
            </p>
          </div>
          {/* BOTÓN */}
          <div className="text-center lg:text-start my-5">
            <button className="rounded-xl text-base bg-secondary text-whiteText font-bold w-44 h-10 hover:bg-accent">
              Saber más
            </button>
          </div>
        </div>
        {/* BOTÓN */}
      </section>
      {/* //////////////////////////////// INFO /////////////////////////////////*/}

      {/* //////////////////////////////// TESTIMONIOS /////////////////////////////////*/}

      <section>
        <div className="text-center my-8">
          <h3 className="text-base font-medium text-secondary">
            ¿Qué dicen los estudiantes sobre
            <span className="font-bold text-primary"> Rumy</span>?
          </h3>
          <h2 className="text-4xl font-bold text-accent">Testimonios</h2>
        </div>

        {/* CARDs */}
        <TestimonialesCard
          name={'juanita Pelaez'}
          comment={
            'Gracias a Rumy no tuve que estresarme más al buscar en dónde vivir. Pude preocuparme solo en estudiar”. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
          image={
            'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
          }
        />
        {/* CARDs */}
      </section>

      {/* //////////////////////////////// TESTIMONIOS /////////////////////////////////*/}

      {/* //////////////////////////////// ESCUELAS /////////////////////////////////*/}

      <section>
        <h2 className="text-center p-5 mt-5 text-xl font-semibold text-accent">
          Las mejores viviendas cerca de las mejores escuelas
        </h2>
        <div className="flex justify-center">
          <Image
            src={'/escuelas/ipn.webp'}
            alt="Hola"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </section>

      {/* //////////////////////////////// ESCUELAS /////////////////////////////////*/}

      {/* MOISÉS */}
    </main>
  );
}
