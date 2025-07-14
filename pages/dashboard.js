import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#181F31] text-white">
      {/* Topbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#22283a]">
        <div className="flex items-center gap-2">
          <img src="/logo_sphinx.png" alt="Sphinx AI Logo" className="h-10 w-auto" />
          <span className="font-bold text-2xl ml-2">SPHINX AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="font-semibold">Dashboard</Link>
          <Link href="/" className="font-semibold">Home</Link>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
        <p className="text-gray-400 mb-8">Here’s a snapshot of your AI learning content and video projects.</p>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#22283a] rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">Video Projects</span>
            <span className="text-3xl font-bold mb-2">12</span>
            <Link href="#" className="bg-yellow-400 text-gray-900 px-6 py-2 font-semibold rounded-2xl mt-2">
              Go to Video Studio
            </Link>
          </div>
          <div className="bg-[#22283a] rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">Custom Trainings</span>
            <span className="text-3xl font-bold mb-2">7</span>
            <Link href="#" className="bg-blue-400 text-gray-900 px-6 py-2 font-semibold rounded-2xl mt-2">
              Go to Training Studio
            </Link>
          </div>
          <div className="bg-[#22283a] rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">Your Avatars</span>
            <span className="text-3xl font-bold mb-2">4</span>
            <Link href="#" className="bg-green-400 text-gray-900 px-6 py-2 font-semibold rounded-2xl mt-2">
              Manage Avatars
            </Link>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-[#22283a] rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Video Projects</h2>
            <Link href="#" className="bg-yellow-400 text-gray-900 px-5 py-2 font-semibold rounded-xl flex items-center gap-2">
              New Project
            </Link>
          </div>
          <table className="w-full text-left text-gray-200">
            <thead>
              <tr className="border-b border-[#333B4D]">
                <th className="py-2">Title</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#333B4D] hover:bg-[#232B3B] transition">
                <td className="py-3">Intro to Python</td>
                <td>Instructor 1</td>
                <td>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Completed</span>
                </td>
                <td>2025-07-13</td>
                <td>
                  <Link href="#" className="bg-blue-400 text-gray-900 rounded px-3 py-1 font-semibold text-sm">
                    View
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-[#232B3B] transition">
                <td className="py-3">Business Strategy 101</td>
                <td>Instructor 2</td>
                <td>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs">In Progress</span>
                </td>
                <td>2025-07-11</td>
                <td>
                  <Link href="#" className="bg-blue-400 text-gray-900 rounded px-3 py-1 font-semibold text-sm">
                    View
                  </Link>
                </td>
              </tr>
              {/* More rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
