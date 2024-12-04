import { useState } from "react";
import Product from "./products/pages/Product";
import ProductModal from "./products/pages/ProductModal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import MainNavigation from "./shared/navigation/MainNavigation";
import Cart from "./cart/cart";
import AuthContext from "./hooks/auth-hook";
import SignUp from "./forms/signup";

const data = [
  {
    id: "p1",
    name: "apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel molestiae repellendus tempora, eaque iure?",
    price: 91,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus maiores nemo non veniam deserunt aliquid, libero sit deleniti praesentium similique et modi? Facilis fuga similique aut expedita maxime dolore distinctio eveniet inventore. Fugit voluptates autem, cupiditate natus necessitatibus quae.",
    image:
      "https://imgs.search.brave.com/0Wd3c1OFXE2VKLG-ZBIUnMiMSILbrBu1YN6Va-e9VVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/aXBob25lL2hvbWUv/YngvaW1hZ2VzL292/ZXJ2aWV3L3NlbGVj/dC9pcGhvbmVfMTVf/X2J1d2FnZmYwbXd3/aV94bGFyZ2UucG5n",
  },

  {
    id: "p2",
    name: "headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel molestiae repellendus tempora, eaque iure?",
    price: 40,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus maiores nemo non veniam deserunt aliquid, libero sit deleniti praesentium similique et modi? Facilis fuga similique aut expedita maxime dolore distinctio eveniet inventore. Fugit voluptates autem, cupiditate natus necessitatibus quae.",
    image:
      "https://imgs.search.brave.com/_4Nw3LdTy4wCyXt-k91X1GnoEPpkFUicIGtXFMhuunc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/MTc0OTEyNC9waG90/by9zdHlsaXNoLWJs/dWUtaGVhZHBob25l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Y0tZWjZRMk9j/QmVJWFdOT1g1MjFf/bFB1SUtfZ0gtcldP/LWxfb1hKbkxhTT0",
  },

  {
    id: "p3",
    name: "Mouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel molestiae repellendus tempora, eaque iure?",
    price: 87,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus maiores nemo non veniam deserunt aliquid, libero sit deleniti praesentium similique et modi? Facilis fuga similique aut expedita maxime dolore distinctio eveniet inventore. Fugit voluptates autem, cupiditate natus necessitatibus quae.",
    image:
      "https://imgs.search.brave.com/_5NDhmqstRIvhzPGEp0rcG4hhKdANNdcWxsLYdrWpQw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NjAwODYyNy9waG90/by9jb21wdXRlci1t/b3VzZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dDBfMk15/ZnpvSjRYWU9TWGFv/NFVwYmRZQWx0cC1r/X0szWTA2ejIzNUNX/bz0",
  },

  {
    id: "p4",
    name: "Tablet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel molestiae repellendus tempora, eaque iure?",
    price: 101,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus maiores nemo non veniam deserunt aliquid, libero sit deleniti praesentium similique et modi? Facilis fuga similique aut expedita maxime dolore distinctio eveniet inventore. Fugit voluptates autem, cupiditate natus necessitatibus quae.",
    image:
      "https://imgs.search.brave.com/LMKAgsZz9LhvW0DK5sSpMfFZTQup51LXLbEFjA-tXrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/Mjk3NDkxL3Bob3Rv/L3RhYmxldC1jb21w/dXRlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UG9aYjhi/NDM1U0dWaHBEVjdH/TTFKM2NDNlJFeU41/QW1WWTNpUURuZ1ht/RT0",
  },

  {
    id: "p5",
    name: "computer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel molestiae repellendus tempora, eaque iure?",
    price: 999,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus maiores nemo non veniam deserunt aliquid, libero sit deleniti praesentium similique et modi? Facilis fuga similique aut expedita maxime dolore distinctio eveniet inventore. Fugit voluptates autem, cupiditate natus necessitatibus quae.",
    image:
      "https://imgs.search.brave.com/YnKiIx-9GjSFVICXiEAFqBNSnjLw4qZSX5xTbn-185g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93b3Jrc3BhY2Ut/bW9ja3VwLWNvbXB1/dGVyLXBjLWlzb2xh/dGVkLXdoaXRlLXNj/cmVlbi1kZXNrLXdp/dGgtc21hcnRwaG9u/ZS1rZXlib2FyZF8z/ODcxNi05Ny5qcGc_/c2VtdD1haXNfaHli/cmlk",
  },

  {
    id: "p6",
    name: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel molestiae repellendus tempora, eaque iure?",
    price: 301,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus maiores nemo non veniam deserunt aliquid, libero sit deleniti praesentium similique et modi? Facilis fuga similique aut expedita maxime dolore distinctio eveniet inventore. Fugit voluptates autem, cupiditate natus necessitatibus quae.",
    image:
      "https://imgs.search.brave.com/mCavB67YlYcWB9gUCIbUdLAivG_E7onR_NFCmnMmoMc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYx/NjM1OTAvcGhvdG8v/bGFwdG9wLWluLWRh/cmsuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTBVVW5uekN4/VXgxMlhyc1plUzVq/dVVjV3dfRlRLZ24t/eWtzdEVsSmN6VXc9",
  },
];

const cart = [];

function App() {
  const [token, setToken] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function authHandler(token) {
    setToken(token);
  }

  function formHandler(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData.password);
  }

  function addCart(id) {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex > -1) {
      // If item exists, update quantity (you'll need to implement this logic)
      // For now, let's just prevent duplicates:
      return;
    } else {
      const newItem = data.find((prod) => prod.id === id);
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          login: authHandler,
          logout: authHandler,
          cart: addCart,
        }}
      >
        <Router>
          <MainNavigation />
          <Routes>
            <Route index path="/" element={<Product />} />
            <Route path="/products/:id" element={<ProductModal />} />
            <Route path="/cart" element={<Cart cart={cartItems} />} />
            <Route
              path="/signup"
              element={<SignUp data={formData} change={formHandler} />}
            />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
