function App() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gray-900 text-white py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <h1 className="text-6xl font-bold mb-6">Welcome to Studio</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="w-full bg-white py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <h2 className="text-4xl font-semibold mb-8">Section One</h2>
          <p className="text-gray-600 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full bg-gray-50 py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <h2 className="text-4xl font-semibold mb-8">Section Two</h2>
          <p className="text-gray-600 max-w-3xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full bg-white py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <h2 className="text-4xl font-semibold mb-8">Section Three</h2>
          <p className="text-gray-600 max-w-3xl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Studio</h3>
            <p className="text-gray-400">© 2024 Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
