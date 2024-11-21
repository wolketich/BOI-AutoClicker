chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ["content.js"],
    });
});