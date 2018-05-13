import { NEXT_SLIDE } from '../../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case NEXT_SLIDE:
      return state + 1;
    default:
      return state;
  }
}
