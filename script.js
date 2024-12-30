document.querySelectorAll('.right-box .box').forEach(box => {
    box.addEventListener('mouseenter', function() {
      const imageSrc = this.getAttribute('data-image');
      document.getElementById('left-box-img').src = imageSrc;
    });
  });
  