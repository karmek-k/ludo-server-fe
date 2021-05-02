export enum ServerUrlAction {
  SET,
  RESET
}

export const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case ServerUrlAction.SET:
      return { serverUrl: action.serverUrl };
    case ServerUrlAction.RESET:
      return { serverUrl: '' };
  }
};
