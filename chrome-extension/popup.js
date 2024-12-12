document.getElementById('saveContext').addEventListener('click', function() {
  const context = document.getElementById('contextInput').value;
  chrome.storage.local.set({ contextData: context }, function() {
    alert('Contexto salvo!');
  });
});