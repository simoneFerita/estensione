function fetchConnectionSpeed() {
  // Calcola la velocità della connessione
  const startTime = performance.now();
  fetch('https://www.google.com', { method: 'HEAD', cache: 'no-store' })
    .then(response => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      const speed = (10 / (duration / 1000)).toFixed(2); // Calcola la velocità in KB/s
      //document.getElementById('speed').innerText = 'Connection speed: ' + speed + ' KB/s';
      const speedInMB = (speed / 1024).toFixed(2); // Converti in MB/s
      document.getElementById('speed').innerText = 'Connection speed: ' + speedInMB + ' MB/s';
    })
    .catch(error => console.error('Errore nel calcolare la velocità della connessione:', error))
    .finally(() => {
      // Esegui nuovamente il fetch ogni 1 secondi
      setTimeout(fetchConnectionSpeed, 1000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  // Ottieni l'indirizzo IP
  fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').innerText = 'Public IP address: ' + data.ip;
    })
    .catch(error => console.error('Errore nell\'ottenere l\'indirizzo IP:', error));

  // Esegui il fetch iniziale della velocità della connessione
  fetchConnectionSpeed();
});
