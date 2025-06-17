import { useEffect, useRef } from 'react';
import './AchievementsButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importando o FontAwesomeIcon
import { faCheck } from '@fortawesome/free-solid-svg-icons';  // Importando o ícone fa-check

function AchievementsButton({ url, levelRequired, currentLevel }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.display =
        levelRequired <= currentLevel ? 'block' : 'none';
    }
  }, [levelRequired, currentLevel]);

  return (
    <div id='fundo'>

        <img
        ref={buttonRef}
        src={url}
        id='achievements-button'
        alt="Achievements Icon"
        className="achievements-button"
        title="Achievements"
        />
      </div>
  );
}

export default AchievementsButton;