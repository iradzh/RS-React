import './components/SearchBar/SearchBar.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { loadCharacter, loadListSimple } from './api/service';
import Details from './components/Details/Details';
import DetailsLayout from './layouts/DetailsLayout';
import { PageLayout } from './layouts/PageLayout';
import { RootLayout } from './layouts/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<PageLayout />} loader={loadListSimple} />
      <Route path=':page' element={<PageLayout />} loader={loadListSimple}>
        <Route path='details' element={<DetailsLayout />}>
          <Route path=':charID' element={<Details />} loader={loadCharacter} />
        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
