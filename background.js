chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startAutoClick") {
    // Start auto-clicking in the active tab
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ["content.js"],
    });
    sendResponse({ result: "Auto-click script started" });
  }
});