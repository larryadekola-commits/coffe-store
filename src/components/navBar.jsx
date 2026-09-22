import coffeeLogo from "../assets/coffee logo.jpg";
import Section4 from "./section4";

export default function NavBar() {
  return (
    <nav className="bg-[#EFE1CC] w-screen fixed top-0 z-50">
      <ul className="flex items-center justify-between gap-4 px-4 py-2 font-semibold text-black">
        <li>
          <img
            src={coffeeLogo}
            alt="Coffee logo"
            className="h-10 w-20 rounded-full me-auto object-cover"
          />
        </li>

        <div className="flex gap-4">
          <li className="list-none transition hover:bg-[#D9B38C] hover:rounded-full hover:px-3 hover:py-2">
            <a href="#section1">Home</a>
          </li>
          <li className="list-none transition hover:bg-[#D9B38C] hover:rounded-full hover:px-3 hover:py-2">
            <a href="#section4">Menu</a>
          </li>
          <li className="list-none transition hover:bg-[#D9B38C] hover:rounded-full hover:px-3 hover:py-2">
            <a href="#section2">About</a>
          </li>
          <li className="list-none transition hover:bg-[#D9B38C] hover:rounded-full hover:px-3 hover:py-2">
            <a href="#section3">Loyalty</a>
          </li>
          <li className="list-none transition hover:bg-[#D9B38C] hover:rounded-full hover:px-3 hover:py-2">
            <a href="#section5">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
