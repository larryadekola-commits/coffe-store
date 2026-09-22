function Card(props) {
  return (
    <div className="flex w-65 min-w-[16rem] flex-col justify-between rounded-[1.25rem] bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      <img
        src={props.image}
        alt={props.title}
        className="h-52 w-full rounded-2xl object-cover"
      />

      <div className="mt-4 flex flex-1 flex-col">
        <h2 className="text-[1.6rem] font-bold text-[#2d1b14]">
          {props.title}
        </h2>
        <p className="mt-2 text-[0.95rem]  text-[#5d4638]">
          {props.content}
        </p>
      </div>

      <p className="mt-4 text-[1.2rem] font-bold text-[#2d1b14]">
        {props.price}
      </p>
    </div>
  );
}

export default Card;
