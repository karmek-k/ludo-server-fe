export enum ConnectionState {
  DISCONNECTED,
  // CONNECTING,
  CONNECTED
}

export const indicatorMessages = new Map<ConnectionState, string>([
  [ConnectionState.DISCONNECTED, 'No connection'],
  [ConnectionState.CONNECTED, 'Connection established']
]);
