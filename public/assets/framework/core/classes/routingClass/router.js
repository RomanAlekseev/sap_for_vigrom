export const router = {
  getUrl() {
    if (location.hash === "") return "default";
    return location.hash.slice(1);
  }
};
