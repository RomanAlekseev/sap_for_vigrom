import { history } from "framework";

export const template = () => {
  if (history.getHistoryQueue().length > 0) {
    return `
    <button type="button" class="btn btn-light goBack">goBack</button>
    `;
  }
  return null;
};

export default template;
