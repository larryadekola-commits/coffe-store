import seed from "../assets/seed.jpg";

export default function Section3() {
  return (
    <section className="w-screen bg-[#2E1F16] p-5 md:flex md:justify-between">
      <div className="space-y-7 pl-10 pt-20 text-white md:pl-30">
        <h1 className="text-5xl font-bold">Why Choose Us</h1>

        <p>
          We believe great coffee can change the world. We are committed to
          sourcing and serving the best coffee while promoting sustainability
          and social responsibility.
        </p>

        <button className="rounded-full bg-white px-4 py-3 font-bold text-black transition hover:opacity-90">
          Learn our story
        </button>
      </div>

      <div>
        <img
          src={seed}
          alt="Coffee seed"
          className="mt-10 mr-50 w-150 rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
