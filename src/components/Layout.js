import { Outlet, useNavigate } from "react-router-dom";
import "../css/Layout.css";

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "¿Estás seguro de que deseas cerrar sesión?"
    );
    if (confirmLogout) {
      // Aquí puedes agregar la lógica para cerrar la sesión del usuario
      console.log("Sesión cerrada");
      navigate("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Menú</h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <button onClick={() => handleNavigate("medicina")}>Medicina</button>
          </li>
          <li>
            <button onClick={() => handleNavigate("alimentos")}>
              Alimentos
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("maquinaria")}>
              Maquinaria
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("utencilios")}>
              Utencilios
            </button>
          </li>
        </ul>
      </aside>
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="top-bar">
          <button
            style={{
              width: "fit-content",
            }}
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
          {}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
