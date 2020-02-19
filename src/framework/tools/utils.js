const util = {
  delay(ms = 1000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },

  isUndefinded(data) {
    return typeof data === "undefined";
  }
};

export { util };
