import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">

        <Router>
        <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/user/:userId" element={<User />}></Route>
            <Route path="/newuser" element={<NewUser />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path="/newproduct" element={<NewProduct />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
