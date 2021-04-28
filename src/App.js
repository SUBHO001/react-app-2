import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

function App() {
  //localhost:3000/
  //my-page.com/
  return (
    <div>
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
    </div>
  );
}

export default App;
