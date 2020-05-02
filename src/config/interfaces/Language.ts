export interface Language {
    label: string,
    flag: string

    changeLanguage(languageId: string): void
}
