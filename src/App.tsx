import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import IndexPage from './pages/IndexPage';
import GamePage from './pages/GamePage';
import NotFoundPage from './pages/NotFoundPage';
import Context from './utils/context';
import ConnectionIndicator from './components/shared/ConnectionIndicator';

const App: React.FC = () => {
  const [serverUrl, setServerUrl] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    const s = io(serverUrl);

    s.on('connect', () => {
      setConnected(true);
    });
    s.on('disconnect', () => {
      setConnected(false);
    });

    setSocket(s);
  }, [serverUrl]);

  return (
    <Context.Provider value={{ socket, serverUrl }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/game" component={GamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <ConnectionIndicator connected={connected} />
    </Context.Provider>
  );
};

export default App;
