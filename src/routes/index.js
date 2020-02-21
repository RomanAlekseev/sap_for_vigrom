import homeComponent from "../components/pages/homePage/";
import aboutPage from "../components/pages/aboutPage/";
import itemsPage from "../components/pages/itemsPage/";
import notFound from "../components/pages/notFoundPage/";
import { menu } from "../components/menu";

export const appRoutes = {
  default: homeComponent,
  about: aboutPage,
  items: itemsPage,
  menu: menu,
  notFound: notFound
};
