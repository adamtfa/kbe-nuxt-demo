export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Komponentenbasierte Entwicklung',
      ects: 5,
      lecturer: 'M.Sc. Eyad Wahdan',
      description: 'Architekturprinzipien, Schnittstellen, Vue 3 und Jakarta EE.'
    },
    {
      id: 2,
      title: 'Web-Engineering',
      ects: 5,
      lecturer: 'Prof. Dr. Muster',
      description: 'Moderne Webarchitekturen, HTTP, REST und Frontend-Frameworks.'
    },
    {
      id: 3,
      title: 'Verteilte Systeme',
      ects: 5,
      lecturer: 'Prof. Dr. Beispiel',
      description: 'Kommunikation über Netzwerke, Fehlertoleranz und Skalierbarkeit.'
    }
  ]
})