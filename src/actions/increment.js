export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function Increment(number) {
  return {
    type: INCREMENT,
    number
  };
}

export function Decrement(number) {
  return {
    type: DECREMENT,
    number
  };
}
