import styles from './Image.module.css';

import Image from 'next/image';

export default function Schools() {
  return (
    <section>
      <h2 className="text-center p-5 mt-5 text-xl font-semibold text-accent">
        Las mejores viviendas cerca de las mejores escuelas
      </h2>

      <div className="flex flex-wrap gap-3 justify-center items-center">
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
        <div className="hidden md:block">
          <Image
            src={'/escuelas/ipn.webp'}
            alt="Hola"
            width={64}
            height={64}
            className={`object-cover ` + styles.school}
          />
        </div>
        <div className="hidden md:block">
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
        <div className="hidden md:block">
          <Image
            src={'/escuelas/ipn.webp'}
            alt="Hola"
            width={64}
            height={64}
            className={`object-cover ` + styles.school}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={'/escuelas/ipn.webp'}
            alt="Hola"
            width={64}
            height={64}
            className={`object-cover ` + styles.school}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={'/escuelas/ipn.webp'}
            alt="Hola"
            width={64}
            height={64}
            className={`object-cover ` + styles.school}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={'/escuelas/ipn.webp'}
            alt="Hola"
            width={64}
            height={64}
            className={`object-cover ` + styles.school}
          />
        </div>
      </div>
    </section>
  );
}
