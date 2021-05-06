import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';

function App() {
  //localhost:3000/
  //my-page.com/
  return (
    <Layout>
      <Switch>
        <Route path='/react-app-2/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/react-app-2/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/react-app-2/new-meetups'>
          <NewMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
