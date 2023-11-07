import * as React from 'react'

export const useLocalStorage = () => {
    const [value, setValue] = React.useState<string | null>()

    const getItem = (key: string) => {
        const keyValue = localStorage.getItem(key)
        setValue(keyValue)
        return keyValue
    }

    const setItem = (key: string, value: string) => {
        localStorage.setItem(key, value)
        setValue(value)
    }

    const deleteItem = (key: string) => {
        localStorage.removeItem(key)
        setValue(null)
    }

    return {
        value,
        getItem,
        setItem,
        deleteItem,
    }
}
