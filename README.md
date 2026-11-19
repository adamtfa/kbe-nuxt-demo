# KBE Nuxt Demo

Kleine Demo-Anwendung zur Präsentation über **Nuxt** im Modul *Komponentenbasierte Entwicklung* (HTW Berlin, WiSe 2026/27).
Es ist ein fiktiver Modulkatalog: eine Übersichtsseite, eine Detailseite und eine kleine API als Backend-Platzhalter.

## Schnellstart

Voraussetzung: Node.js (aktuelle LTS-Version) und npm.

```bash
npm install
npm run dev      # Entwicklungsserver: http://localhost:3000
```

Weitere Befehle:

```bash
npm test         # Tests mit Vitest
npm run build    # Produktions-Build
npm run preview  # Produktions-Build lokal ansehen
```

## Projektstruktur und Bezug zur Präsentation

Nuxt 4 legt den Frontend-Code im Ordner `app/` ab, der Server-Code liegt daneben in `server/`.

```
app/
├── app.vue                  Grundgerüst der Seite
├── pages/                   Folie 5: Datei = Seite (File-based Routing)
│   ├── index.vue            →  /
│   └── modules/[id].vue     →  /modules/1, /modules/2, ...
├── components/ModuleCard.vue   Folie 6: ohne import nutzbar
└── composables/useModules.ts   Folie 6 und 7: Datenabruf mit useFetch
server/
├── api/modules.get.ts          GET /api/modules
├── api/modules/[id].get.ts     GET /api/modules/:id (404 bei unbekannter ID)
└── utils/modules.ts            Fiktive Daten, im server/-Ordner auto-importiert
tests/
├── ModuleCard.test.ts          Folie 8: Test wie in Vue (NuxtLink gestubbt)
└── ModuleCard.nuxt.test.ts     Folie 8: Test in der Nuxt-Umgebung
```

## Was die Demo zeigt

1. **Routing:** Die Dateien in `app/pages/` sind die Seiten, es gibt keine Router-Konfiguration.
2. **Auto-Imports:** `ModuleCard`, `useModules`, `useFetch`, `useRoute` und `useSeoMeta` werden nirgends importiert.
3. **Server-Rendering:** Mit `curl http://localhost:3000/` oder im Browser über *Seitenquelltext anzeigen* (`view-source:`) sieht man, dass die Modulliste schon im HTML steht, ebenso den `<title>`.
4. **Daten und Schnittstelle:** Die Seiten sprechen nur mit der REST-Schnittstelle unter `/api/...`. Ein echtes Backend (z. B. Quarkus) könnte diese Schnittstelle ersetzen, ohne dass sich die Seiten ändern.
5. **Fehlerfall:** `/modules/99` liefert eine echte 404-Antwort.
6. **Tests:** Ein Test wie in Vue und ein Test in der Nuxt-Umgebung (`.nuxt.` im Dateinamen).