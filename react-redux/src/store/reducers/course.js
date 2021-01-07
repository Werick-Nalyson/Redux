const INITIL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Aprendendo redux",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" }
      ]
    },
    {
      id: 2,
      title: "Aprendendo redux2",
      lessons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    }
  ]
}

export default function reducer(state = INITIL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeLesson: action.lesson, activeModule: action.module }
  }

  return state
}