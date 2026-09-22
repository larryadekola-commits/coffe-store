export default function Section2() {
  return (
    <section className="w-screen bg-[#EFE1CC] p-5">
      <h1 className="text-center text-4xl font-semibold">Features</h1>

      <div className="mt-10 grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center">
        <div className="flex-2 border-r border-[#2E1F16] text-center">
          <i className="bi bi-cup-hot rounded-full border border-[#EFE1CC] bg-[#2E1F16] px-3 py-2 text-white"></i>
          <h2 className="mt-3 text-xl font-bold">Espresso</h2>
          <p className="text-sm">
            Pulled short, dense crema,
            <br />
            our house blend at its most
            <br />
            concentrated.
          </p>
        </div>

        <div className="flex-2 border-r border-[#2E1F16] text-center">
          <i className="bi bi-cup-hot rounded-full border border-[#EFE1CC] bg-[#2E1F16] px-3 py-2 text-white"></i>
          <h2 className="mt-3 text-xl font-bold">Latte</h2>
          <p className="text-sm">
            Silky milk, gentle sweetness,
            <br />
            and a velvet finish for
            <br />
            slow sipping.
          </p>
        </div>

        <div className="flex-2 border-r border-[#2E1F16] text-center">
          <i className="bi bi-cloud-sun rounded-full border border-[#EFE1CC] bg-[#2E1F16] px-3 py-2 text-white"></i>
          <h2 className="mt-3 text-xl font-bold">Cold Brew</h2>
          <p className="text-sm">
            Smooth, mellow, and brewed
            <br />
            for a long, crisp finish
            <br />
            that keeps going.
          </p>
        </div>

        <div className="flex-2 border-r border-[#2E1F16] text-center">
          <i className="bi bi-cookie rounded-full border border-[#EFE1CC] bg-[#2E1F16] px-3 py-2 text-white"></i>
          <h2 className="mt-3 text-xl font-bold">Pastries</h2>
          <p className="text-sm">
            Fresh-baked favorites to
            <br />
            pair with every pour
            <br />
            and every chat.
          </p>
        </div>
      </div>
    </section>
  );
}
