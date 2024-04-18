import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./components/Signup-page.jsx";
import ForgetPasword from "./components/Forget-password.jsx";
import { Provider } from 'react-redux';
import store from './redux/store.js';

import Cart from "./components/Cart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgetpasword",
        element: <ForgetPasword />,
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
