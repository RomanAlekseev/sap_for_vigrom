export const router = {
  getUrl() {
    if (location.hash === "") return "/";
    return location.hash.slice(1);
  }
};
