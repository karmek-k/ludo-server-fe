import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { io } from 'socket.io-client';
import IndexPage from './pages/IndexPage';
import GamePage from './pages/GamePage';
import NotFoundPage from './pages/NotFoundPage';
import Context from './utils/context';
import ConnectionIndicator from './components/shared/ConnectionIndicator';

const App: React.FC = () => {
  return (
    <Context.Provider value={{ socket: null }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/game" component={GamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <ConnectionIndicator />
    </Context.Provider>
  );
};

export default App;
