import './components/SearchBar/SearchBar.scss';

import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
