import { homeComponent } from "../components/home";
import { aboutPage } from "../components/AboutPage";
import { itemsPage } from "../components/ItemsPage";
import { notFound } from "../components/notFound";

export const appRoutes = {
  default: homeComponent,
  about: aboutPage,
  items: itemsPage,
  notFound: notFound
};
