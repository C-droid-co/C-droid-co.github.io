// CTA click
function ctaClick() {
    alert("Message me privately on TikTok to get started!");
}

// Random notifications
const notifications = [
    "5 people just visited!",
    "Someone just copied my trade!",
    "New high profit today!",
    "X people are checking out the site now!",
    "Someone joined the mentors group!"
];

function showNotification() {
    const container = document.getElementById('notifications');
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = notifications[Math.floor(Math.random() * notifications.length)];
    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 5000);
}

// Show notification every 8 seconds
setInterval(showNotification, 8000);
