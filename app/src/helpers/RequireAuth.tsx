import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

type Props = {
    children: ReactNode
}

export const RequireAuth = ({ children }: Props) => {
    const { user } = useAuth()
    return user ? children : <Navigate to="/login" replace />
}
