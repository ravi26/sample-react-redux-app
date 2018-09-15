export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export default function currentNumber(
  state = {
    increment: 0,
    decrement: 0
  },
  action
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        ...{
          increment: action.number + state.increment
        }
      };
    case DECREMENT:
      return {
        ...state,
        ...{
          decrement: state.decrement - action.number
        }
      };
    default:
      return state;
  }
}
