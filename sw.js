self.addEventListener('fetch', function(event) {
  // This is a basic service worker to allow installation
});
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
</script>
