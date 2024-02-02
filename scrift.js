function calculateBMI() {
    // Retrieve the values from the input fields
    var height = document.getElementById('heightInput').value;
    var weight = document.getElementById('weightInput').value;
    var bmi = weight/height;
    if(bmi>18.5 || bmi < 24){
        console.log("You are fit")
    }

    // Perform the BMI calculation or any other desired functionality
    // For simplicity, let's just display the values for now
    alert("Height: " + height + "\nWeight: " + weight + "\nBMI" + bmi);
}
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Find the button element by its ID and attach a click event listener
    var calculateButton = document.getElementById('calculateButton');
    if (calculateButton) {
        calculateButton.addEventListener('click', function () {
            // Function to be executed when the button is clicked
            calculateBMI();
        });
    }
});