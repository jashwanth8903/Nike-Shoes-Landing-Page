import './App.css';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Products from './components/products/Products';
import Review from './components/review/Review';
import Services from './components/services/Services';


function App() {
  return (
    <div className="App container-body">
      <Main/>
      <Products/>
      <Review/>
      <Services/>
      <Login/>
      <Footer/>
      {/*<About/>
      
      
      
       */}
    </div>
  );
}

export default App;
