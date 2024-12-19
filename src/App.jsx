import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Details from "./pages/details/Details"

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-neutral-50 flex flex-col">
          {/* Navbar section */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<Details />} />
          </Routes>

          {/* Footer */}
          <Footer />

        </main>
      </Router>
    </>
  )
}

export default App
