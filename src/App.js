import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import BrowsePage from './Pages/BrowsePage/BrowsePage';
import CartPage from './Pages/CartPage/CartPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import HomePage from './Pages/HomePage/HomePage';
import './Styles/App.scss';

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/item' element={<DetailsPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/:category' element={<BrowsePage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
  );
}

export default App;
