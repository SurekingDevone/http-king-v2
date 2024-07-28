document.addEventListener('DOMContentLoaded', () => {
  const throttleConnectionsElem = document.getElementById('throttleConnections');
  const rateLimitElem = document.getElementById('rateLimit');
  const blacklistedIPsElem = document.getElementById('blacklistedIPs');
  const blacklistForm = document.getElementById('blacklistForm');
  const rateLimitForm = document.getElementById('rateLimitForm');
  const removeIPButton = document.getElementById('removeIP');

  const fetchStatus = () => {
    fetch('/status')
      .then(response => response.json())
      .then(data => {
        throttleConnectionsElem.textContent = data.throttleConnections;
        rateLimitElem.textContent = data.rateLimit;
        blacklistedIPsElem.innerHTML = '';
        data.blacklistedIPs.forEach(ip => {
          const li = document.createElement('li');
          li.textContent = ip;
          blacklistedIPsElem.appendChild(li);
        });
      });
  };

  blacklistForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const ip = blacklistForm.ip.value;
    fetch('/blacklist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        fetchStatus();
        blacklistForm.reset();
      });
  });

  removeIPButton.addEventListener('click', () => {
    const ip = blacklistForm.ip.value;
    fetch('/blacklist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        fetchStatus();
        blacklistForm.reset();
      });
  });

  rateLimitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const rateLimit = rateLimitForm.rateLimit.value;
    fetch('/rate-limit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rateLimit }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        fetchStatus();
        rateLimitForm.reset();
      });
  });

  fetchStatus();
});
