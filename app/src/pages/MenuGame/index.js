import { useCallback, useContext, useEffect, useState } from 'react'

import { getThemes } from '../../services/question_api.js'
import { UserContext } from '../../context/UserContext.js'
import { useNavigate } from 'react-router-dom';

import { Card } from '../../components/Card/index.js'
import { Option } from '../../components/Option/index.js'
import { UserBar } from '../../components/UserBar/index.js'

import s from './index.module.css'

export const MenuGame = () => {
  const { User, logout } = useContext(UserContext)
  const [themes, setThemes] = useState([])
  const navegate = useNavigate()



  
  const handleThemes = useCallback(async () => {
    const response = await getThemes()
    setThemes(response.datas.themes)
  }, [])
  
  useEffect(() => {
    if(!User.name) {
      logout()
      return navegate("/")
    }
    handleThemes()
  }, [handleThemes])
  
  return (
    <Card>
      <div className={s.container}>
        <UserBar />
        <h3 className='title'>Escolha o tema</h3>
        <div className={s.menu}>
          {themes?.map(theme => <Option key={theme} theme={theme} />)}
        </div>
      </div>
    </Card>
  );
}
