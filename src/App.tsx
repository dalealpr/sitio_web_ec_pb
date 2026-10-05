import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <main className="flex-1 flex flex-col">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
