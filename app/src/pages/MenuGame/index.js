import {useCallback, useEffect, useState} from 'react'

import { getThemes } from '../../services/question_api.js'

import { Card } from '../../components/Card/index.js'
import { Option } from '../../components/Option/index.js'

export const MenuGame = () => {
  const [themes, setThemes] = useState([])

  const handleThemes = useCallback(async () => {
    const response = await getThemes()
    setThemes(response.datas.themes)
  }, [])

  useEffect(() => {
    handleThemes()
  }, [handleThemes])

  return ( 
    <div className="App">
      <Card>
        <h1 className='title'>Quiz App</h1>
        {themes?.map(theme => <Option key={theme} theme={theme} />)}
      </Card>
      </div>
  );
}
