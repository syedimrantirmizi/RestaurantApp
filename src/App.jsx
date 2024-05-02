import { Route, Routes } from "react-router-dom";
import Authroute from "./routes/Authroute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protectedroute from "./routes/Protectedroute";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Authroute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<Protectedroute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
