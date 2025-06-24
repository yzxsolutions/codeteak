import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';

const Layout = () => {
  const location = useLocation();
  const hideFooterPaths = ['/contact', '/product']; // Add any other paths as needed
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <BottomNav />
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Layout;
