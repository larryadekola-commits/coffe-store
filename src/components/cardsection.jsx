import Card from "./card";

function cardSection() {
  return (
    <div className="flex flex-row items-stretch justify-center gap-10 bg-[#EFE1CC] px-4 py-10">
      <Card
        image="https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80"
        title="Espresso"
        content="A strong, bold coffee made by forcing steam through ground coffee beans."
        price="$3.50"
      />

      <Card
        image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
        title="Cappuccino"
        content="A coffee drink made with steamed milk and a layer of foam."
        price="$4.00"
      />

      <Card
        image="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
        title="Latte"
        content="A coffee drink made with espresso and steamed milk."
        price="$4.50"
      />


      <Card
        image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
        title="Mocha"
        content="A coffee drink made with espresso, steamed milk, and chocolate."
        price="$4.50"
      />
    </div>
  );
}

export default cardSection;