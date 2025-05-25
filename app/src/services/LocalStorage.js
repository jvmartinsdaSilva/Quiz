export const setLocalStorage = (key, value) => {

    return window.localStorage.setItem(key, value)
}

export const getLocalStorage = (key) => {
    if (typeof window !== undefined) {
        const data = window.localStorage.getItem(key)
        const res = data ?? ""
        return res
      }
}

export const cleanStorage = () => {
    return window.localStorage.clear()
}