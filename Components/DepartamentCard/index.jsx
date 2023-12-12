import Image from 'next/image';
export default function DepartamentCard(props) {
    return(

    <div className="w-80 relative mx-auto h-[400px] my-5">
      <img
        src= "/rumy1.png"
        alt=""
        className="absolute z-0 rounded-md object-cover h-full inset-0 bg-gradient-to-t from-black to-white"
      />
      
      <h3 className='text-white font-bold text-2xl capitalize relative bottom-[-130px] left-0 p-5  ' >
        Azcapotzalco
       </h3> 
       <p className='text-white font-semibold text-ms capitalize relative bottom-[-90px] left-0 p-5  ' >
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


    );

}
