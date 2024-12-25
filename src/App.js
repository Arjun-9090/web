import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import RootLayout from "./components/RootLayout";

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
        }
      ]
    }
  ]);





  return <RouterProvider router={router} />
}
export default App