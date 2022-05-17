export const requestStarted = phrase => (dispatch, getState) => {
  const stateBeforeRequest = getState();

  console.log(`${phrase}: `, stateBeforeRequest);
};