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
    let historyCount = __getCount();
    __shouldUpdateHistory = false;
    if (historyCount >= 0) {
      window.location.replace(__historyQueue[historyCount--]);
    }
  }

  goForward() {
    let historyCount = __getCount();
    __shouldUpdateHistory = false;
    if (historyCount <= 10) {
      window.location.replace(__historyQueue[historyCount++]);
    }
  }

  shouldUpdateToTrue() {
    __shouldUpdateHistory = true;
  }

  historyCountIncrement() {
    __historyCount++;
  }

  historyCountDecrement() {
    __historyCount--;
  }

  shouldUpdate() {
    return __shouldUpdateHistory;
  }
}
const __historyQueue = JSON.parse(sessionStorage.getItem("history")) || [];

let __shouldUpdateHistory = true;

let __historyCount = null;

const __getCount = () => {
  if (__historyCount || __historyCount === 0) return __historyCount;
  return __historyQueue.length - 1;
};
