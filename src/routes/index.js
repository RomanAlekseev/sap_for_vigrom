import homeComponent from "../components/pages/homePage/";
import aboutPage from "../components/pages/aboutPage/";
import itemsPage from "../components/pages/itemsPage/";
import notFound from "../components/pages/notFoundPage/";
import menuPage from "../components/pages/menuPage/";
import { goBackButton } from "../components/common/goBackButton";
import { navigation } from "../components/common/navigation";

export const appRoutes = {
  "/": homeComponent,
  about: aboutPage,
  items: itemsPage,
  menu: menuPage,
  notFound: notFound,
  common: [navigation, goBackButton]
};
