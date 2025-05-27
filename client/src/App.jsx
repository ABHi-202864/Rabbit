import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER LAYOUT */}
        <Route path="/" element={<UserLayout />}>
        </Route>
        <Route>
          {/* ADMIN LAYOUT */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
