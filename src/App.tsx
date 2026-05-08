import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Programme } from "./components/Programme"
import { Header } from "./components/header"
import { Home } from "./components/Home/Home"



const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen z-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Programme" element={<Programme />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App