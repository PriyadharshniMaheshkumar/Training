import daytimesky from "../asserts/daytimesky.jpg";
import nighttimesky from "../asserts/nighttimesky.jpg";
import { ReactComponent as HomeIcon } from "../asserts/home.svg";
import { ReactComponent as SecurityIcon } from "../asserts/security.svg";
import { ReactComponent as SettingsIcon } from "../asserts/settings.svg";
import { ReactComponent as BuildingIcon } from "../asserts/building.svg";
import { ReactComponent as LogoOnlyIcon } from "../asserts/logoOnly.svg";
import useStore from "../store/app.zustand";
import "./Content.css";

const Content = () => {
  const { logo, setLogo, mode } = useStore();

  const logoMapping = {
    home: <HomeIcon />,
    building: <BuildingIcon />,
    security: <SecurityIcon />,
    setting: <SettingsIcon />,
  };

  const backgroundImage = mode === "light" ? daytimesky : nighttimesky;

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
    position: "relative",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const getLogo = () => logoMapping[logo] || <LogoOnlyIcon />;

  const renderIcons = () => {
    return (
      <>
        {Object.keys(logoMapping).map((key) => (
          <div key={key} className="icon" onClick={() => setLogo(key)}>
            {logoMapping[key]}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="content">
      <div style={backgroundStyle}></div>
      <div className="page">
        <div className="page-select">
          <div className="page-title">
            <div className="logo">{getLogo()}</div>
            <div className="title">React UI Project</div>
          </div>
        </div>
        <div className="page-icons">{renderIcons()}</div>
      </div>
    </div>
  );
};

export default Content;
