import cooo from "../assets/cooo.jpg";

export default function Section1() {
  return (
    <section
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${cooo})` }}
    >
      <div className="text-white pt-20 px-10 space-y-4 md:px-20">
        <h1 className="text-5xl font-bold">
          Savor the Perfect <br />
          Brew
        </h1>
        <p>
          Beans roasted in-house every Tuesday, poured with intention.
          <br />
          No syrups pretending to be flavor — just heat, water, and patience.
        </p>

        <div className="flex space-x-5">
          <button className="bg-white hover:opacity-90 text-black font-bold py-3 px-4 rounded-full">
            See the menu
          </button>
          <button className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded-full">
            Book a table
          </button>
        </div>
      </div>
    </section>
  );
}
