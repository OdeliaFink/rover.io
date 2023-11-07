import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useLocalStorage } from './useLocalStorage'

export type User = {
    email: string
    tokens: {
        refresh: string
        access: string
        expiresAt: Date
    }
}

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext)
    const { setItem, deleteItem } = useLocalStorage()
    const addUser = (userObj: User) => {
        setItem('userObject', JSON.stringify(userObj))
        setUser(userObj)
    }

    const removeUser = (key: string) => {
        deleteItem(key)
        setUser(null)
    }

    return {
        user,
        addUser,
        removeUser,
    }
}
