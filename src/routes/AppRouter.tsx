import { Routes, Route } from "react-router-dom";
import { routes } from "./index";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }, k) => (
        <Route key={k} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
