import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer.jsx';
import Navbar from './components/Navbar.jsx';
import { calculateTotals } from './features/cart/cartSlice.js';
import { useEffect } from 'react';
import Modal from './components/Modal.jsx';

function App() {
  const cartItems = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
