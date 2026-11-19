export interface Module {
  id: number
  title: string
  ects: number
  lecturer: string
  description: string
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Komponentenbasierte Entwicklung',
    ects: 5,
    lecturer: 'M.Sc. Eyad Wahdan',
    description: 'Architekturprinzipien, Schnittstellen, Vue 3 und Jakarta EE.'
  },
  {
    id: 2,
    title: 'Webtechnologien',
    ects: 5,
    lecturer: 'Prof. Dr. Arif Wider',
    description: 'Moderne Webarchitekturen, HTTP, REST und Frontend-Frameworks.'
  },
  {
    id: 3,
    title: 'Verteilte Anwendungen',
    ects: 5,
    lecturer: 'Prof. Dr. Mustermann',
    description: 'Kommunikation über Netzwerke, Fehlertoleranz und Skalierbarkeit.'
  }
]
