import NavBar from "./components/navBar";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Footer from "./components/footer";


function App() {
  return (
    <div className="overflow-x-hidden bg-[#EFE1CC]">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
