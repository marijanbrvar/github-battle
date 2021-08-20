import React from "react";

const LanguagesNav = ( {selected, onUpdateLanguage} ) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Dart']
    
  return (
    <ul className='flex-center'>
      {languages.map((language, idx) => (
        <li key={idx}>
          <button 
            id={language}
            style={language === selected ? {color: 'rgb(187, 46, 31)'} : null }
            onClick={() => onUpdateLanguage(language)}
            className='btn-clear nav-link'
            >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default LanguagesNav;