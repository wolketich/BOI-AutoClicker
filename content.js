function autoClick() {
  const countdownElement = document.querySelector("#countdown");

  if (countdownElement) {
    // Extract the time left (assuming it's in the format "X minutes until logout")
    const text = countdownElement.innerText;
    const minutesLeft = parseInt(text.split(' ')[0]);

    if (minutesLeft === 4) {
      countdownElement.click();  // Click the countdown element when 2 minutes are left
    }
  }
}

// Set an interval to check every second
setInterval(autoClick, 1000);