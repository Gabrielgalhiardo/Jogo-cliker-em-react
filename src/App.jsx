import { useState } from 'react'
import './App.css'
import UpgradeButton from './Components/Upgrade-button/UpgradeButton'
import AchievementsButton from './Components/Achievements-button/AchievementsButton'
function App() {

  return (

      <div>
        <h1>Começando</h1>
        <UpgradeButton precoUpdrade={1200}/>
        <AchievementsButton url="/cliker1.png" levelRequired ={5} currentLevel={10} />
      </div>
  )
}

export default App
