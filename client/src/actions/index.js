export const NEXT_SLIDE = 'NEXT_SLIDE'

export const nextSlide = () => (dispatch) => {
  dispatch({ type: NEXT_SLIDE })
}

