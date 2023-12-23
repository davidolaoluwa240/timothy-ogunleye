// Components
import { Route, Routes } from "react-router-dom";

// Pages
import { About, Contact, Home } from "../pages";

// Layouts
import { DefaultLayout } from "../layouts";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
