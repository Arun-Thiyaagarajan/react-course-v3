import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";


const Homelayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )
      }
    </>
  );
}

export default Homelayout;