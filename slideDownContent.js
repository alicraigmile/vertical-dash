document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('content').style.visibility = 'hidden';
  setTimeout(function() {
    document.getElementById('content').className = 'slideDown';
  }, 1000);
}, false);
