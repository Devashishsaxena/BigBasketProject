import './App.css';
import Bigbasket from './component/Bigbasket/Bigbasket';
import Productpage from './component/productPage/Productpage';
import Productdetails from './component/productDetails/Productdetails';
import Createproduct from './component/createProduct/Createproduct';
import Updateproduct from './component/updateProduct/Updateproduct';
function App() {
  return (
    <>
      <Bigbasket />
      <Productpage />
      <Productdetails />
      <Createproduct />
      <Updateproduct />
    </>
  );
}

export default App;
