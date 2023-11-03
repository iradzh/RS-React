import './components/SearchBar/SearchBar.scss';

import { Route, Routes } from 'react-router-dom';

import DetailsLayout from './layouts/DetailsLayout';
import { RootLayout } from './layouts/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='details' element={<DetailsLayout />}>
          <Route path='/details/:charID' element={<DetailsLayout />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
