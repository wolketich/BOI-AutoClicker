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
      elementFound: true
    });

    if (minutesLeft === 4) {
      countdownElement.click();  // Click the countdown element when 4 minutes are left
    }
  }
}

// Set an interval to check every 10 seconds
setInterval(autoClick, 10* 1000);