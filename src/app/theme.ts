import decorator from "@assets/img/decorator.svg";
import userIcon from "@assets/img/userIcon.png";
import decoratorWhite from "@assets/img/decoratorWhite.png";

const theme = {
  defaults: {
    userThumbnail: userIcon,
  },
  pattern: decorator,
  patternWhite: decoratorWhite,
  text_color: {
    default: "#1D1D1B",
    accent: {
      dark_blue: "#03045E",
      blue: "",
      orange: "#FAB60B",
    },
  },
  border_colors: {
    card: "",
  },
  bg_colors: {
    icon: {
      dim: "rgba(174, 175, 203, .40)",
      bright: "#FDE8B1",
      hover: "rgba(174, 175, 203, 1)",
    },
    accent: {
      dark_blue: "#03045E",
      blue: "",
      orange: "#FAB60B",
    },
  },
  sizes: {
    atm_card: {
      width: "",
      height: "",
    },
    ui_card: {
      border_width: "",
      border_radius: "1rem",
    },
    font: {
      default: "1.4rem",
    },
    input: {
      padding: "1.5rem",
      height: "5.2rem",
      otp: "7.2rem",
    },
  },
};

export default theme;
