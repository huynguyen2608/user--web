'use client'

import { useAuth } from '@/hooks/useAuth'

export default function DashboardPage() {
    const { user, logout, loading } = useAuth()

    if (loading) return <p>Đang tải...</p>
    if (!user) return <p>Bạn chưa đăng nhập.</p>

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
            <p>Xin chào, {user.name} ({user.email})</p>
            <button onClick={logout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Đăng xuất
            </button>
        </div>
    )
}
