import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Component/Home/Home.jsx';
import DetailsData from './Components/Component/Phones/Showphonedata/DetailsData/DetailsData.jsx';
import Dashboard from './Components/Component/Phones/Showphonedata/DetailsData/Dashboard/Dashboard.jsx';
import Electronics from './Components/Component/Pages/Electronics/Electronics.jsx';
import FashionPage from './Components/Component/Pages/Electronics/FashionPage/FashionPage.jsx';
import Offerd from './Components/Component/Pages/Electronics/Offerd/Offerd.jsx';
import AllOfferd from './Components/Component/Pages/Electronics/Offerd/AllOfferd/AllOfferd.jsx';
import DealsPage from './Components/Component/Pages/Electronics/Deals/Deals.jsx';
import Register from './Components/Authincation/AuthProvider/Register/Register.jsx';
import Login from './Components/Authincation/AuthProvider/Login/Login.jsx';
import Authincation from './Components/Authincation/AuthProvider/Authincation.jsx';
import Privetroute from './Components/Authincation/Privetroute/Privetroute.jsx';
import CheckoutPage from './Components/Component/Phones/Showphonedata/DetailsData/Dashboard/CheckoutPage/CheckoutPage.jsx';
import PaymentPage from './Components/Component/Phones/Showphonedata/DetailsData/Dashboard/PaymentPage/PaymentPage.jsx';
import NewProduct from './Components/Component/Pages/Electronics/Cetagoryspages/NewProduct/NewProduct.jsx';
import Overall from './Components/Component/Pages/Electronics/Cetagoryspages/Overall/Overall.jsx';
import FaqPage from './Components/Component/Pages/Electronics/Cetagoryspages/FaqPage/FaqPage.jsx';
import ShopMap from './Components/Component/Pages/Electronics/Cetagoryspages/shopMap/ShopMap.jsx';
import SupportPages from './Components/Component/Pages/Electronics/Cetagoryspages/SupportPages/SupportPages.jsx';
import Tranding from './Components/Component/Pages/Electronics/Cetagoryspages/Tranding/Tranding.jsx';
import ContactusPage from './Components/Component/Pages/Electronics/Cetagoryspages/ContactusPage/ContactusPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element:  <DetailsData></DetailsData>   ,
        loader: () => fetch('/Phone.json')

      },
      {
        path: '/dashboard',
        element:  <Dashboard></Dashboard> 
      },
      {
        path: '/electronics',
        element: <Electronics></Electronics>
      },
      {
        path: '/fashion',
        element: <FashionPage></FashionPage>
      },
      // {
      //   path:'/offers',
      //   element: <Offerd></Offerd>
      // },
      {
        path: '/offers',
        element: <AllOfferd></AllOfferd>
      },
      {
        path: '/deals',
        element: <DealsPage></DealsPage>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/CheckoutPage',
        element: <CheckoutPage></CheckoutPage>
      },
      {
        path: '/payment',
        element: <PaymentPage></PaymentPage>
      },
      {
        path: '/newproducts',
        element: <NewProduct></NewProduct>
      },
      {
        path: '/overall',
        element: <Overall></Overall>
      },
      {
        path: '/faq',
        element: <FaqPage></FaqPage>
      },
      {
        path: '/map',
        element: <ShopMap></ShopMap>
      },
      {
        path: '/support',
        element: <SupportPages></SupportPages>
      },
      {
        path: '/trending',
        element: <Tranding></Tranding>
      },
      {
        path: '/contact',
        element: <ContactusPage></ContactusPage>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authincation>
    
      <RouterProvider router={router} />
    </Authincation>

  </StrictMode>,
)
