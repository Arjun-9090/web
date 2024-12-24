import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import RootLayout from "./components/RootLayout";
import Tech from "./home/Tech";
import DisPlaySec from "./home/DisPlaySec";
import ProductCard from "./components/ProductCard";
const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },

        {
          path: 'about',
          element: <About />

        },
        {
          path: 'Contact',
          element: <ContactUs />
        },
        {
          path: 'Tech',
          element: <Tech />
        },
        {
          path: 'DisPlaySec',
          element: <DisPlaySec />
        },
        {
          path: 'ProductCard',
          element: <ProductCard />
        }
      ]
    }
  ]);





  return <RouterProvider router={router} />
}
export default App