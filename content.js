function autoClick() {
    chrome.storage.sync.get(['autoClickEnabled'], function(result) {
      if (result.autoClickEnabled) {
        const countdownElement = document.querySelector("#countdown");
  
        if (countdownElement) {
          const text = countdownElement.innerText;
          const minutesLeft = parseInt(text.split(' ')[0]);
  
          if (minutesLeft === 2) {
            countdownElement.click();
          }
        }
      }
    });
  }
  
  // Set an interval to check every 5 second
    setInterval(autoClick, 5000);