export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  //REMEMBER TO REMOVE THIS AFTER FINISHED DEVELOPING !!!
  // token:
  //   "BQAlSNNFjziIyNq781RWQBnO2yIkxrrP9WqMxV8cFQZ6uZqUwUyaJO_WUwJDKwHt8TBRg6wfBavNL3V2E0POUZAg7ytHEZ48_RKaBKLvi_nkDEpU9ooKoTgyEG83Pkg5bYHG3tlk4i-Ehrgyj4JtKVCcaD55ew",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_RECENTLY_PLAYED_TRACKS":
      return {
        ...state,
        recent_tracks: action.recent_tracks,
      };

    default:
      return state;
  }
};

export default reducer;
