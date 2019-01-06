export default function shoppingListItemReducer(state = {items: []}, action) {
  console.log(action, "ACTION ONLY")
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log(state.items.concat(state.items.length), "ldjf");
      return Object.assign({}, {
        items: state.items.concat(state.items.length)
      });

    default:
      console.log(state, "DEFAULT")
      return state;
  }
};
