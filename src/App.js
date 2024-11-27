import "./App.css";
import Container from "./component/Container";
import Nav from "./component/Nav";
import ProductContainer from "./component/ProductContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container/>
      <ProductContainer/>
    </div>
  );
}

export default App;
