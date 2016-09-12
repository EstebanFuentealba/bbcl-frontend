export default (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_LOADING':
      return 'loading'
    case 'SEARCH_POSTS':
      return ''
    default:
      return state
  }
}
