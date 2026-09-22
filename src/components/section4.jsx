import CardSection from "./cardsection";

function Section4() {
  return (
    <div id="section4" className="scroll-mt-24 overflow-x-hidden bg-[#EFE1CC] px-4 py-8 md:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[#2D1F19] md:text-4xl">
          Discover your favorite coffee
        </h1>
        <div className="mx-auto mt-3 h-px w-20 bg-[#2D1F19]/60" />
      </div>

      <CardSection />
    </div>
  );
}

export default Section4;