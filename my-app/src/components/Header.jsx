import "./Header.css";
import { ReactComponent as WidgetIcon } from "../asserts/widgetsInc.svg";
import { ReactComponent as ToggleOffIcon } from "../asserts/toggleOff.svg";
import { ReactComponent as ToggleOnIcon } from "../asserts/toggleOn.svg";
import useStore from "../store/app.zustand";

const Header = () => {
  const { mode, label, setMode } = useStore();

  return (
    <div className="header">
      <div className="widget">
        <WidgetIcon />
      </div>
      <div className="mode">
        <div className="label">{label}</div>
        <div className="toggle">
          {mode === "light" ? (
            <ToggleOffIcon onClick={() => setMode("dark", "Darkmode On")} />
          ) : (
            <ToggleOnIcon onClick={() => setMode("light", "Darkmode Off")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
