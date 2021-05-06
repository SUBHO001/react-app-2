import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';

function App() {
  //localhost:3000/
  //my-page.com/
  //console.log(this.state);
  console.log('this is the process.env', process.env.PUBLIC_URL);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
