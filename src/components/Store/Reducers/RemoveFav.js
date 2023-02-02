const InitialValue = {
  favorites: [],
};

export default function RemoveRed(state = InitialValue, action) {
  switch (action.type) {
    case "CHANGEFAVORITE":
      return {
        ...state,
        favorites: [action.payload],
      };
    default:
      return state;
  }
}
