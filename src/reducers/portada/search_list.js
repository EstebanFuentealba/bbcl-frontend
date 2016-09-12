export default (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_POSTS':
      return action.data
    default:
      return state
  }
}
