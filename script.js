document.querySelectorAll('.right-box .box').forEach(box => {
    box.addEventListener('mouseenter', function() {
      const imageSrc = this.getAttribute('data-image');
      document.getElementById('left-box-img').src = imageSrc;
    });
  });

// Select the Alex Keeper box and all other boxes
const alexKeeperBox = document.getElementById('alex-keeper-box');
const allBoxes = document.querySelectorAll('.right-box .box');