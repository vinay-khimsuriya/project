import { Outlet } from "react-router-dom";
import "./App.css";
import Carousel from "./component/Carousel";
import Container from "./component/Container";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import ProductContainer from "./component/ProductContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      {/* <Container />
      <ProductContainer />
      <Carousel /> */}
      <Footer />
    </div>
  );
}

export default App;
