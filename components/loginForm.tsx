'use client'

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function LoginForm() {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const mockUser = {
            id: '123',
            name,
            email,
        }

        login(mockUser)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm" >
            <input
                type="text"
                placeholder="Tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)
                }
                className="p-2 border rounded"
            />
            <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" >
                Đăng nhập
            </button>
        </form>
    )
}
