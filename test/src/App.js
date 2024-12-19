import './App.css';
import './Layout.css';
import Header from './layout/Header'; //불러오기
import Program from './layout/Program';
import Product from './layout/Product';
import Footer from './layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <Program />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
