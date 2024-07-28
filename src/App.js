// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile } from "./pages";
import { Home } from "./pages";
import { Header } from "./components";
import { ProductDetails } from "./pages/ProductDetail";
import { Signup } from "./pages/Signup";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/logout" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
