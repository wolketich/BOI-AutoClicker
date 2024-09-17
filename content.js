let counter = 0;

function autoClick() {
  const countdownElement = document.querySelector("#countdown");

  if (countdownElement) {
    // Extract the time left (assuming it's in the format "X minutes until logout")
    const text = countdownElement.innerText;
    const minutesLeft = parseInt(text.split(' ')[0]);

    // Send an update to the popup about the element being found and the counter
    chrome.runtime.sendMessage({
      action: "updateCounter",
      counter: ++counter,
      elementFound: true
    });

    if (minutesLeft === 4) {
      countdownElement.click();  // Click the countdown element when 4 minutes are left
    }
  } else {
    // If element not found, notify the popup
    chrome.runtime.sendMessage({
      action: "updateCounter",
      counter: ++counter,
      elementFound: false
    });
  }
}

// Set an interval to check every second
setInterval(autoClick, 1000);

// Listen for the startAutoClick message from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startAutoClick") {
    sendResponse({ status: "Started" });
  }
});