import { Routes, Route, Navigate } from "react-router-dom";

import { MarvelPage, DCPage } from "../heroes/pages";
import { LoginPage } from "../auth/pages";

import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
