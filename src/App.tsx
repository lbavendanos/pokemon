import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="main" data-testid="main"></main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default App
