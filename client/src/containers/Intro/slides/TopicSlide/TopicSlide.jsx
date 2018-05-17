import React from 'react'
import Slide from '../../../../components/Slide'
import css from './index.scss'
// Universal slide styles
import { leftPanel, rightPanel } from '../../index.scss'

const StartSlide = () => (
  <Slide className={css.TopicSlide__modifier}>
    <div className={leftPanel}>
      <h3 className={css.TopicSlide}>asdasd</h3>
    </div>
    <div className={rightPanel} />
  </Slide>
)
export default StartSlide
