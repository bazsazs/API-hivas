async function kereses() {
    const input = document.getElementById('telepulesInput').value.trim();
    if (input === '') {
      alert('Kérlek add meg a település nevét!');
      return;
    }

    try {
      const response = await fetch(`https://hur.webmania.cc/zips/${input}.json`);
      const data = await response.json();
      const talalatokDiv = document.getElementById('talalatok');
      talalatokDiv.innerHTML = '';

      if (data.zips && data.zips.length > 0) {
        const telepulesek = data.zips;
        telepulesek.forEach(telepules => {
          const p = document.createElement('p');
          p.textContent = `${telepules.name}: ${telepules.zip}`;
          talalatokDiv.appendChild(p);
        });
      } else {
        talalatokDiv.textContent = 'Nincs a keresésnek megfelelő találat.';
      }
    } catch (error) {
      console.error('Hiba történt a keresés során:', error);
      alert('Hiba történt a keresés során. Kérlek próbáld újra később!');
    }
  }