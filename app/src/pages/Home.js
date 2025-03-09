import {useCallback, useEffect, useState} from 'react'

import { getThemes } from '../services/question_api.js'

import { Option } from '../components/Option/index.js'
export const Home = () => {
  const [themes, setThemes] = useState([])

  const handleThemes = useCallback(async () => {
    const response = await getThemes()
    setThemes(response.themes)
  }, [])

  useEffect(() => {
    handleThemes()
  }, [handleThemes])

  return ( 
    <div className="App">
      <div className="container">
        <h1 className='title'>Quiz App</h1>
        {themes?.map(theme => <Option key={theme} theme={theme} />)}
      </div>
    </div>
  );
}
