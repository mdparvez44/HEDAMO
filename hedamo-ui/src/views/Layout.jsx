export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      
      {/* 3D Floating Header */}
      <header className="
        sticky top-0 z-20
        bg-white/90 backdrop-blur
        border-b border-gray-200
        shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]
      ">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Left */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Hedamo Disclosure Platform
            </h1>
            <p className="text-xm text-gray-500 mt-0.5">
              Structured producer-declared information
            </p>
          </div>

          {/* Right */}
          <div className="
            text-sm font-semibold text-gray-600
            bg-gray-100 px-4 py-2 rounded-full
            shadow-inner
          ">
            Producer-Declared
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
