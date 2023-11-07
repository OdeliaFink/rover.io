import * as React from 'react'
import { User } from '../hooks/useUser'

type AuthContextType = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const initialContextState = {
    user: null,
    setUser: () => {},
}

export const AuthContext = React.createContext<AuthContextType>(initialContextState)

type Props = {
    children: React.ReactNode
}

const AuthContextProvider = ({ children }: Props) => {
    const [user, setUser] = React.useState<User | null>(null)

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
