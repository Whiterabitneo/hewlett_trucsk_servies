function sendEmail() {
  // Fetch the form input values
  var customerName = document.getElementById("name").value;
  var customerEmail = document.getElementById("email").value;
  var truckType = document.getElementById("truck-type").value;
  var rentalDuration = document.getElementById("duration").value;
  var additionalInfo = document.getElementById("additional-info").value;

  // Send the email using SMTPJS
  Email.send({
    SecureToken: "YOUR_SMTPJS_TOKEN", // Replace with your SMTPJS token
    To: 'recipient@example.com', // Replace with your email
    From: customerEmail, // Use customer email as the sender
    Subject: `New Truck Order from ${customerName}`,
    Body: `
      <h3>New Truck Order Details:</h3>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      <p><strong>Truck Type:</strong> ${truckType}</p>
      <p><strong>Rental Duration:</strong> ${rentalDuration}</p>
      <p><strong>Additional Information:</strong> ${additionalInfo}</p>
    `
  }).then(function (message) {
    alert("Order successfully sent! We will contact you soon.");
  }).catch(function (error) {
    console.error("Error sending email:", error);
    alert("There was an issue sending your order. Please try again.");
  });
}

// Attach the event listener to the form submit button
document.getElementById("submit-order").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  sendEmail(); // Call sendEmail function
});