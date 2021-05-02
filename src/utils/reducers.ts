export enum ServerUrlAction {
  SET,
  RESET
}

export const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case ServerUrlAction.SET:
      return { ...state, serverUrl: action.serverUrl };
    case ServerUrlAction.RESET:
      return { ...state, serverUrl: '' };
  }
};
