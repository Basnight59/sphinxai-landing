import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#121C2B] to-[#202534] min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <img src="/logo_sphinx.png" alt="Sphinx AI Logo" className="h-10 w-auto" />
          <span className="font-bold text-2xl ml-2">SPHINX AI</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#avatars" className="hover:underline">Avatars</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Link href="/dashboard">
            <span className="ml-4 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-2xl shadow hover:bg-yellow-300 transition cursor-pointer">
              Dashboard
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">
          AI-Powered Training <span className="text-yellow-400">Made Easy</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Create, deliver, and track engaging training content with AI instructors, custom avatars, and HD video lectures. Empower your team or audience with interactive, professional learning experiences.
        </p>
        <a href="/dashboard" className="bg-yellow-400 text-gray-900 px-8 py-3 font-bold text-lg rounded-2xl shadow-lg hover:bg-yellow-300 transition">
          Go to Dashboard
        </a>
      </header>

      {/* Features */}
      <section id="features" className="py-16 bg-[#181F31]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Sphinx AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center py-8 bg-[#202534] rounded-2xl shadow">
              <svg className="h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v6l4 2" /></svg>
              <h3 className="text-xl font-semibold mb-2">HD Video Creation</h3>
              <p className="text-gray-400 text-center">Produce professional, broadcast-quality video lectures in minutes. 1920x1080, 24 FPS, with avatars and code highlighting.</p>
            </div>
            <div className="flex flex-col items-center py-8 bg-[#202534] rounded-2xl shadow">
              <svg className="h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
              <h3 className="text-xl font-semibold mb-2">AI Instructors</h3>
              <p className="text-gray-400 text-center">Choose from expert avatars or create your own. Each brings a unique personality to your content.</p>
            </div>
            <div className="flex flex-col items-center py-8 bg-[#202534] rounded-2xl shadow">
              <svg className="h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18" /></svg>
              <h3 className="text-xl font-semibold mb-2">Analytics & Tracking</h3>
              <p className="text-gray-400 text-center">Monitor learner progress, engagement, and content effectiveness with live dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avatars */}
      <section id="avatars" className="py-16 bg-[#202534]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Meet Your AI Instructors</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col items-center">
                <img src={`/avatar${i}.png`} className="rounded-full h-24 mb-2 shadow-lg" alt={`Avatar ${i}`} />
                <span className="font-semibold text-lg">Instructor {i}</span>
                <span className="text-yellow-400">Specialty</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="text-center py-12 bg-[#121C2B] border-t border-[#22283a]">
        <h3 className="text-2xl font-bold mb-4">Ready to create with Sphinx AI?</h3>
        <a href="/dashboard" className="bg-yellow-400 text-gray-900 px-8 py-3 font-bold text-lg rounded-2xl shadow-lg hover:bg-yellow-300 transition">
          Start Now
        </a>
        <div className="mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sphinx AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
