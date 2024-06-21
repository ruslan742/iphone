import Hero from "./components/Hero";
import Highligts from "./components/Highligts";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highligts />
      <Model />
    </main>
  );
};

export default App;
