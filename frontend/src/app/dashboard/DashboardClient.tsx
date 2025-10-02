'use client'

import { useAuth } from '@/contexts/AuthContext'
import { User } from '@supabase/supabase-js'

interface DashboardClientProps {
  user: User
}

export default function DashboardClient({ user }: DashboardClientProps) {
  const { signOut } = useAuth()

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
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Spine.AI! 🎉
            </h2>
            <p className="text-gray-600 mb-4">
              Your authentication is working perfectly. You're logged in as: <strong>{user.email}</strong>
            </p>
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Step 2 Complete!</h3>
              <p className="text-green-800">
                Authentication is fully functional. Next up: Image upload functionality!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
