import {useEffect, useState} from 'react'

import { Option } from './components/Option/index.js'

function App() {
  const [themes, setThemes] = useState([])

  const getDatas = async () => {
    const datas = await fetch("http://localhost:3001/questions/themes")
    const res = await datas.json()
    setThemes(res.themes)
  }

  useEffect(() => {getDatas()})

  return (
    <div className="App">
      <div className="container">
        <h1>Quiz App</h1>
        {themes?.map(theme => <Option theme={theme} />)}
      </div>
    </div>
  );
}

export default App;
