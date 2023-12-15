function showTooltip(element) {
  var tooltip = element.querySelector('.tooltip');
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';
}

function hideTooltip(element) {
  var tooltip = element.querySelector('.tooltip');
  tooltip.style.opacity = '0';
  tooltip.style.visibility = 'hidden';
}
function prosesTopUp() {
  var nomorHP = document.getElementById('nomorHP').value;
  var jumlahTopup = document.getElementById('jumlahTopup').value;

  // Simulasi proses top-up (ganti ini dengan logika sesungguhnya)
  var hasilTopup = `Top-Up sebesar ${jumlahTopup} ke nomor ${nomorHP} berhasil.`;

  document.getElementById('hasilTopup').innerText = hasilTopup;
}

function convertToImage() {
  // Get user input
  const userInput = document.getElementById('textInput').value;

  // Simulate AI conversion (replace with actual AI service integration)
  const fakeAIServiceResponse = simulateAIServiceConversion(userInput);

  // Display result image
  const resultImageContainer = document.getElementById('resultImage');
  resultImageContainer.innerHTML = `<img src="${fakeAIServiceResponse}" alt="AI Image">`;
}

function simulateAIServiceConversion(text) {
  // Replace this with actual code to interact with an AI service
  // In this simulation, we're just appending the text to a placeholder image URL
  const placeholderImageURL = 'https://placekitten.com/300/200'; // Replace with your AI service endpoint
  return `${placeholderImageURL}?text=${encodeURIComponent(text)}`;
}

function submitForm() {
        // You can add your form submission logic here
        // For a basic example, you can log the form data to the console
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log(formData);
    }
    
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle("dark-theme");

        // Example: You can also toggle other elements or apply more complex theme changes here

        // Save the user's theme preference (optional)
        const isDarkMode = body.classList.contains("dark-theme");
        localStorage.setItem("darkMode", isDarkMode);
    }

    // Check and apply user's theme preference on page load
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
        document.body.classList.add("dark-theme");
    }