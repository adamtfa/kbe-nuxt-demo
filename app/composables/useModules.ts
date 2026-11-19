export const useModules = () => useFetch('/api/modules')

export const useModule = (id: string | string[]) => useFetch(`/api/modules/${id}`)
