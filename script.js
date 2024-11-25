// script.js
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');

const imageInput = document.getElementById('imageInput');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const downloadButton = document.getElementById('downloadMeme');

let image = null;

// Load the selected image
imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      image = new Image();
      image.src = reader.result;
      image.onload = () => drawMeme(); // Draw the meme once the image is loaded
    };
    reader.readAsDataURL(file);
  }
});

// Draw the meme (image + text)
function drawMeme() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the image
  if (image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  // Add top text
  const topText = topTextInput.value;
  drawText(topText, canvas.width / 2, 50);

  // Add bottom text
  const bottomText = bottomTextInput.value;
  drawText(bottomText, canvas.width / 2, canvas.height - 20);
}

// Helper function to draw text on the canvas
function drawText(text, x, y) {
  ctx.font = '30px Impact';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';
  ctx.lineWidth = 3;

  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
}

// Update meme when text inputs change
topTextInput.addEventListener('input', drawMeme);
bottomTextInput.addEventListener('input', drawMeme);

// Download the meme as an image
downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = canvas.toDataURL();
  link.click();
});
