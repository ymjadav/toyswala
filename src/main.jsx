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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/ForgetPasword",
        element: <ForgetPasword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
