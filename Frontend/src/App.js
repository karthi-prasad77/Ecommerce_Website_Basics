import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import { Home, Products, Product } from './Pages';
import { Footer, Navbar } from './components';

import "./App.scss";

const App = () => {
  const Layout = () => {
    return(
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/products/:id",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
