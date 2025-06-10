const toggleBtn = document.querySelector('.toggle-lyrics');
  const lyricsGrid = document.querySelector('.lyrics-grid');

  toggleBtn.addEventListener('click', () => {
    lyricsGrid.classList.toggle('show-extra');
    toggleBtn.textContent = lyricsGrid.classList.contains('show-extra')
      ? 'Sembunyikan'
      : 'Tampilkan Semua';
  });

  