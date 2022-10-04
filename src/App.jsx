import Navbar from "./components/navbar/Navbar"
import Contact from "./components/contact/Contact"
import Notices from "./components/notices/Notices"
import Ubication from "./components/ubication/Ubication"
import About from "./components/about/About"
import GoTopButton from "./components/gotopbutton/goTopButton"
import "./app.css"
function App() {

  return (
    <div className="App">
      <Navbar />
      <Notices />
      <Ubication />
      <About />
      <Contact />
      <GoTopButton />
    </div>
  )
}

export default App
