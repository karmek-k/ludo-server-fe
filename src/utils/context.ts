import React from 'react';
import { Socket } from 'socket.io-client';

export interface ContextData {
  socket: Socket | null;
  state: any;
  dispatch: any;
}

const Context = React.createContext<ContextData>({
  socket: null,
  state: {},
  dispatch: () => {}
});

export default Context;
