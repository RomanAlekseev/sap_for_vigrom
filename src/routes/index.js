import { homeComponent } from "../components/home";
import { aboutPage } from "../components/AboutPage";
import { itemsPage } from "../components/ItemsPage";
import { notFound } from "../components/notFound";

export const appRoutes = [
  {
    path: "",
    component: homeComponent
  },
  {
    path: "about",
    component: aboutPage
  },
  {
    path: "items",
    component: itemsPage
  },
  {
    path: "**",
    component: notFound
  }
];
