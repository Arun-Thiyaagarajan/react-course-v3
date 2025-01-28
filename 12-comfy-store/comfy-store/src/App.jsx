import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from './pages';
import { ErrorElement } from './components';
// loaders
import { loader as LandingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import { loader as Productsloader } from './pages/Products';
import { loader as CheckoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';
// actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';
// querry handlers
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 mins
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader(queryClient),
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: Productsloader(queryClient),
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader(queryClient),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App