import { useCallback, useEffect, useState } from 'react'

import { getThemes } from '../../services/question_api.js'

import { Card } from '../../components/Card/index.js'
import { Option } from '../../components/Option/index.js'

import s from './index.module.css'

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
    <Card>
      <div className={s.container}>
        <menubar className={s.userInfo}>
          <span>
            <span>User name</span>
            <span>300 pontos</span>
          </span>
          <span>
            ⚙️
          </span>
        </menubar>
        <h3 className='title'>Escolha o tema</h3>
        <div className={s.menu}>
          {themes?.map(theme => <Option key={theme} theme={theme} />)}
        </div>
      </div>
    </Card>
  );
}
