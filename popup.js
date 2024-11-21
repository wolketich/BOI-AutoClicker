document.getElementById("startButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0].id;
  
      // Send a message to the content script to start the auto-clicking process
      chrome.tabs.sendMessage(activeTab, { action: "startAutoClick" }, function (response) {
        if (response && response.status) {
          document.getElementById("status").innerText = response.status;
        }
      });
  
      // Listen for updates from the content script about the countdown
      chrome.runtime.onMessage.addListener(function (message) {
        if (message.action === "updateCounter") {
          document.getElementById("counter").innerText = message.counter;
          document.getElementById("status").innerText = message.elementFound ? "Found" : "Not Found";
        }
      });
    });
  });