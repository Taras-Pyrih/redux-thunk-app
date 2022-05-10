export const requestFinished = phrase => (dispatch, getState) => {
  const stateAfterRequest = getState();
  
  console.log(`${phrase}: ${stateAfterRequest}`);
};