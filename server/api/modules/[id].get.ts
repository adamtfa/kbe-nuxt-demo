export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))
  const found = modules.find((m) => m.id === id)

  if (!found) {
    throw createError({ statusCode: 404, statusMessage: 'Modul nicht gefunden' })
  }
  return found
})
