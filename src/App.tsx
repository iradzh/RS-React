import './components/SearchBar/SearchBar.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// import { loadCharacter, loadListSimple } from './api/service';
import DetailsLayout from './layouts/DetailsLayout';
import { PageLayout } from './layouts/PageLayout';
import { RootLayout } from './layouts/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<PageLayout />} />
      <Route path=':page' element={<PageLayout />}>
        <Route index element={<DetailsLayout />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
