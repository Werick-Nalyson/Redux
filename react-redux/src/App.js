import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Video from './Components/Video'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <Provider store={store}>
      <Video />
      <Sidebar />
    </Provider>
  );
}

export default App
