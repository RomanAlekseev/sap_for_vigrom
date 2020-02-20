import { homeComponent } from "../components/pages/homePage";
import { aboutPage } from "../components/pages/aboutPage";
import { itemsPage } from "../components/pages/ItemsPage";
import { notFound } from "../components/pages/notFoundPage";

export const appRoutes = {
  default: homeComponent,
  about: aboutPage,
  items: itemsPage,
  notFound: notFound
};
