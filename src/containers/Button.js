import { connect } from "react-redux";
import { Increment, Decrement } from "../actions/increment";
import Button from "../component/Button";

const mapStateToProps = state => ({
  incrementVal: state.increment,
  decrementVal: state.decrement
});

const mapDispatchToProps = dispatch => ({
  increment: number => dispatch(Increment(number)),
  decrement: number => dispatch(Decrement(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
