import React from 'react';
import { Socket } from 'socket.io-client';

export interface ContextData {
  socket: Socket | null;
  serverUrl: string;
  // setServerUrl: React.Dispatch<React.SetStateAction<string>>;
}

const Context = React.createContext<ContextData>({
  socket: null,
  serverUrl: ''
});

export default Context;
