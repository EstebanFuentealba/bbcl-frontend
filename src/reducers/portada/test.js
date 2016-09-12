export default (state = 'none', action) => {
  switch (action.type) {
    case 'TEST':
      return 'clickeado'
    default:
      return state
  }
}
