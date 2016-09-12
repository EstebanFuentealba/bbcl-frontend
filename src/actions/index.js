import fetchJsonp from 'fetch-jsonp';
export const test = () =>  ({ type: 'TEST' });
export const search = (query = 'rafaga', page = 0, order = 'desc', content = false) => {
  return (dispatch, state) => {
    dispatch({ type: 'SEARCH_LOADING' });
    fetchJsonp(`http://www.biobiochile.cl/lista/buscador?s=&n=${page}&o=${order}&cont=${content}&l=100&format=json`)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        dispatch({ type: 'SEARCH_POSTS', data: json.data})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  };
};
export const realtime = () => {
  return (dispatch, state) => {
    dispatch({type:'realtime:hello', data:'Hello from redux!'});
  };
};
