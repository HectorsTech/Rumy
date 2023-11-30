import Image from 'next/image';


import TestimonialesCard from '@/Components/TestimonialesCard';
import ButtonLP from '@/Components/ButtonLP';
import SearchBar from '@/Components/SearchBar';

export default function Home() {
  return (
    <main>
      {/* HECTOR */}
      {/*///////////////////////// Info///////////////////////*/}
      <div>
        <h2 className="font-bold text-accent sm:text-[24px] sm:text-center">
              Busca los mejores luagres para rentar siendo estudiante
        </h2>
      </div>
      {/*///////////////////////// Info///////////////////////*/}

      {/*///////////////////////// Buscador///////////////////////*/}
      <SearchBar />
      {/*///////////////////////// Buscador///////////////////////*/}

      {/*///////////////////////// Cards///////////////////////*/}
      <div className="w-80 relative mx-auto h-[400px] my-5">
      <img
        src= "/rumy1.png"
        alt=""
        className="absolute z-0 rounded-md object-cover h-full inset-0 bg-gradient-to-t from-black to-white"
      />
      
      <h3 className='text-white font-bold text-2xl capitalize relative bottom-[-130px] left-0 p-5 text-white ' >
        Azcapotzalco
       </h3> 
       <p className='text-white font-semibold text-ms capitalize relative bottom-[-90px] left-0 p-5 text-white ' >
        CDMX
       </p> 
       <Image 
       src="/icons/stars-filled.svg"
        width={160}
        height={20}
        className='relative bottom-[-60px] left-0 p-5'
       />

      <div className="absolute bottom-0 rounded-b-md h-36 w-full text-cenSter p-5 bg-secondary">
        <h3 className="text-white font-semibold text-lg capitalize">
          $1500 MXN 
        </h3>
        <p className="mt-3 text-white text-sm font-medium line-clamp-3">
          <div className="flex justify-between w-[50%]">
          <span className="font-bold text-primary mx-0">2</span>
          <Image
            src="/icons/car.svg"
            width={20}
            height={20}
            />
          <span className="font-bold text-primary mx-0">1</span>
          <Image
            src="/icons/toilet.svg"
            width={20}
            height={20}
            />
          <span className="font-bold text-primary mx-0">1</span>
          <Image
            src="/icons/kitchen.svg"
            width={20}
            height={20}
            />
          <span className="font-bold text-primary mx-0">1</span>
            <Image
            src="/icons/bed.svg"
            width={20}
            height={20}
            />
          </div>

          <span className="font-bold text-accent mx-0 absolute bottom-[10] right-[0] p-2">Ver mas</span>
        </p>
      </div>
    </div>
    



      {/*///////////////////////// Cards///////////////////////*/}
      {/*////////////////////////////// button///////////////////////*/}

      <div className="text-center lg:text-start my-5  justify-center">
            <ButtonLP text={'Ver mas'} color={'bg-accent'}/>
          </div>



      {/*////////////////////////////// button///////////////////////*/}

      {/* HECTOR */}
      
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
            <ButtonLP text={'Saber más'} color={'bg-secondary'}/>
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
          {/* BOTONES DE CAROUSEL */}
          <div className="mt-5 mx-auto w-44 flex justify-between items-center">
            <button className="w-11 aspect-square rounded-full bg-accent hover:bg-accent/75"></button>
            <span className="text-xl font-medium">01/02</span>
            <button className="w-11 aspect-square rounded-full border-solid border-2 border-accent hover:bg-gray-50"></button>
          </div>
          {/* BOTONES DE CAROUSEL */}
        </div>
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
