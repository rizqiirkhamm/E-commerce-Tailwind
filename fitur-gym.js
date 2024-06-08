// Show More Button
document.getElementById('load-more-btn').addEventListener('click', function() {
    const container = document.getElementById('more-products');
    container.classList.remove('hidden');
    container.classList.add('block');
    this.style.display = 'none'; // hide the button
    const Hidden = document.getElementById('hidden-button');
    Hidden.classList.remove('hidden');
  });

//   Hidden More Button
document.getElementById('hidden-button').addEventListener('click', function() {
    const container = document.getElementById('more-products');
    container.classList.add('hidden');
    container.classList.remove('block');
    this.style.display = 'none'; // hide the button
    document.getElementById('load-more-btn').style.display = 'inline-block'; // show the button
  });