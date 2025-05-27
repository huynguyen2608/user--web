'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
    id: string
    name: string
    email: string
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch {
                localStorage.removeItem('user')
            }
        }
        setLoading(false)
    }, [])

    const login = (data: User) => {
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data)
        router.push('/dashboard')
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
        router.push('/login')
    }

    return { user, isAuthenticated: !!user, login, logout, loading }
}
