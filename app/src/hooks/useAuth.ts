import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { User, useUser } from './useUser'

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser()
    const { getItem } = useLocalStorage()

    useEffect(() => {
        const userValue = getItem('userObject')
        if (userValue) {
            addUser(JSON.parse(userValue))
        }
    }, [])

    const login = (userValue: User) => {
        addUser(userValue)
    }

    const logout = () => {
        removeUser('userObject')
    }

    return { login, logout, user }
}
