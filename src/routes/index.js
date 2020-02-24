import { goBackButton } from "../components/common/goBackButton";
import { navigation } from "../components/common/navigation";

export const appRoutes = {
  "/": () =>
    import(/* webpackMode: "lazy" */ "../components/pages/homePage/").then(
      page => page.default
    ),
  about: () =>
    import(/* webpackMode: "lazy" */ "../components/pages/aboutPage/").then(
      page => page.default
    ),
  items: () =>
    import(/* webpackMode: "lazy" */ "../components/pages/itemsPage/").then(
      page => page.default
    ),
  notFound: () =>
    import(/* webpackMode: "lazy" */ "../components/pages/notFoundPage/").then(
      page => page.default
    ),
  common: [navigation, goBackButton]
};
