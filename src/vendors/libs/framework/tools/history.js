import { util } from "../tools/utils";

export default class History {
  setHistoryQueue() {
    if (__historyQueue.length > 9) {
      __historyQueue.shift();
    }

    __historyQueue.push(location.href);
    sessionStorage.setItem("history", JSON.stringify(__historyQueue));
  }

  getHistoryQueue() {
    return __historyQueue;
  }

  goBack() {
    history.back();
  }

  goForward() {
    history.forward();
  }
}
const __historyQueue = JSON.parse(sessionStorage.getItem("history")) || [];
