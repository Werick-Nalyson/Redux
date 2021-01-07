import React from 'react'

import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => {
  return (
    <>
      <strong>Módulo {activeModule.title}</strong>
      <br />
      <strong>Aula {activeLesson.title}</strong>
      <br />
      <br />
    </>
  )
}

export default connect(state => ({ activeModule: state.course.activeModule, activeLesson: state.course.activeLesson }))(Video)