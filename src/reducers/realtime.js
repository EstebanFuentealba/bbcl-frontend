export default (state = {}, action) => {
  switch(action.type){
    case 'REALTIME_MESSAGE':
      return Object.assign({}, { message: action.data });
    default:
      return state;
  }
}
