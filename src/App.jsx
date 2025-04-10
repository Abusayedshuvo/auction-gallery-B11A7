import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Auctions from "./components/Auctions/Auctions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Auctions></Auctions>
      <Footer></Footer>
    </>
  );
}

export default App;
