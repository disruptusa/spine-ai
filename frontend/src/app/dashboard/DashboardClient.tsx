'use client'

import { useAuth } from '@/contexts/AuthContext'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { apiClient } from '@/lib/api/client'

interface DashboardClientProps {
  user: User
}

interface DashboardData {
  message: string
  user_id: string
  user_email: string
  stats: {
    total_scans: number
    total_books: number
    pending_review: number
  }
}

export default function DashboardClient({ user }: DashboardClientProps) {
  const { signOut } = useAuth()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        const data = await apiClient.get('/api/user/dashboard')
        setDashboardData(data)
      } catch (err: any) {
        setError(err.message || 'Failed to fetch dashboard data')
        console.error('Dashboard fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Spine.AI Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{user.email}</span>
              <button
                onClick={() => signOut()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Spine.AI! 🎉
            </h2>
            <p className="text-gray-600 mb-4">
              Your authentication is working perfectly. You're logged in as: <strong>{user.email}</strong>
            </p>

            {loading && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                <p className="text-blue-800">Loading backend data...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <h3 className="text-lg font-semibold text-red-900 mb-2">⚠️ Backend Connection Error</h3>
                <p className="text-red-800 mb-2">{error}</p>
                <p className="text-sm text-red-700">
                  Make sure your backend is running on http://localhost:8000
                </p>
              </div>
            )}

            {dashboardData && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  ✅ Backend Connection Successful!
                </h3>
                <p className="text-green-800 mb-2">{dashboardData.message}</p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.total_scans}</p>
                    <p className="text-sm text-gray-600">Total Scans</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.total_books}</p>
                    <p className="text-sm text-gray-600">Total Books</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.pending_review}</p>
                    <p className="text-sm text-gray-600">Pending Review</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">🎯 Step 2 Complete!</h3>
              <ul className="text-indigo-800 space-y-1 list-disc list-inside">
                <li>Frontend authentication ✅</li>
                <li>Backend authentication ✅</li>
                <li>Protected routes ✅</li>
                <li>Session management ✅</li>
                <li>Frontend-Backend communication ✅</li>
              </ul>
              <p className="text-indigo-800 mt-4 font-medium">
                Next up: Step 3 - Image upload functionality!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
