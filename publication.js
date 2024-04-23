function showImageThumbnail(input) {
  const imageThumbnailImg = document.getElementById('ThumbnailUploadImg');
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imageThumbnailImg.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function validateForm() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const language = document.getElementById('language').value;

  if (!title || !description || !language ) {
    alert("Please fill in all fields.");
  } else {
    alert("Form submitted successfully!");
  }
}

function clearFields() {
  document.getElementById('title').value = "";
  document.getElementById('description').value = "";
  document.getElementById('language').value = "";
  
}