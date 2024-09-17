let autoClickEnabled = true;

// Load saved state
chrome.storage.sync.get(['autoClickEnabled'], function(result) {
  autoClickEnabled = result.autoClickEnabled || true;
  updateButton();
});

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  autoClickEnabled = !autoClickEnabled;
  chrome.storage.sync.set({ autoClickEnabled: autoClickEnabled });
  updateButton();
});

function updateButton() {
  if (autoClickEnabled) {
    toggleButton.classList.add('active');
    toggleButton.innerText = 'Disable Auto Clicker';
  } else {
    toggleButton.classList.remove('active');
    toggleButton.innerText = 'Enable Auto Clicker';
  }
}