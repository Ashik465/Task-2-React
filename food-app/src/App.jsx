import "./App.css";
import Hero from "./component/Hero";
import MenuCard from "./component/MenuCard";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      {/* navbar section  */}
      <NavBar />
      {/* hero section */}
      <Hero />
      {/* menu card */}
      <MenuCard />
    </>
  );
}

export default App;
