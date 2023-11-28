export default function ButtonLP(props) {
  return (
    <button className="rounded-xl text-base bg-secondary text-whiteText font-bold w-44 h-10 hover:bg-accent">
      {props.text}
    </button>
  );
}
