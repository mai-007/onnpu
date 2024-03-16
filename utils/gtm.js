// JavaScript

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * @typedef {Object} CustomWindow
 * @property {Array<any>} dataLayer
 */

export const pageView = (url) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  const customWindow = window;
  customWindow.dataLayer.push({
    event: "pageView",
    page: url,
  });
};
