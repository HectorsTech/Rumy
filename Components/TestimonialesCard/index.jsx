export default function TestimonialesCard(props) {
  return (
    <div className="w-80 relative mx-auto h-[450px]">
      <img
        src={props.image}
        alt=""
        className="absolute z-0 rounded-3xl object-cover h-full"
      />

      <div className="absolute bottom-0 rounded-b-3xl h-36 w-full text-center p-5 bg-[#212121]/[0.9]">
        <h3 className="text-white font-semibold text-lg capitalize">
          {props.name}
        </h3>
        <p className="mt-3 text-white text-sm font-medium line-clamp-3">
          <span>&#171;</span>
          {props.comment}
          <span>&#187;</span>
        </p>
      </div>
    </div>
  );
}
