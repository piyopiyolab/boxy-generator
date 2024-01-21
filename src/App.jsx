import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LeftContainer from "./layouts/LeftContainer/LeftContainer";





function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap">
        <LeftContainer />
        {/* <Display /> */}

      </main>
      <Footer />
    </div>
  );
}

export default App;
