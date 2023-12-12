import Image from 'next/image';
export default function SearchBar(props) {
    return (
        <div className="flex justify-center items-center my-5">
        <div className="rounded-xl border-2 border-primary focus:outline-none focus:border-accent flex w-[80%] ">
          <Image 
            src={'/Icons/lupa.svg'}
            width={22}
            height={22}
            alt="Cuarto"
            className="mx-3"
          />
          <input
            type="text"
            placeholder="Mi proximo departamento será..."
            className="max-w-[90%] w-full py-3 focus:outline-none"
          />
        </div>  
      </div>
    );
  }