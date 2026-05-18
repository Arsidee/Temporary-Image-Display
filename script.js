var notification = document.getElementById('notification');

document.getElementById('notify-btn').addEventListener('click', function() {
  notification.style.display = 'block';

  setTimeout(function() {
    notification.style.display = 'none';
  }, 3000);
});
