import React, {createContext, useState} from 'react'
import {DEFAULT_LANGUAGE, languages} from "../config";
import {Language} from "../config/interfaces/Language";

const defaultLanguage = languages[DEFAULT_LANGUAGE] as Language

const LanguageContext = createContext<Language>(defaultLanguage as Language)

export const LanguageProvider: React.FC = ({children}) => {
    const [language, setLanguage] = useState<Language>(defaultLanguage)

    function changeLanguage(languageId: string) {
        const newLanguage = languages[languageId]
        setLanguage(newLanguage)
    }

    const startLanguage: Language = {
        ...language,
        changeLanguage
    }

    return (
        <LanguageContext.Provider value={startLanguage as Language}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext
