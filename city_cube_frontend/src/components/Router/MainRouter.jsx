import App from "@/App";
import ErrorPage from "@pages/ErrorPage/ErrorPage";
import HomePage from "@pages/HomePage/HomePage";
import MenuPage from "@pages/MenuPage/MenuPage";
import AccountPage from '@pages/AccountPage/AccountPage';
import CartPage from "@pages/CartPage/CartPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: '/account', element: <AccountPage /> },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
