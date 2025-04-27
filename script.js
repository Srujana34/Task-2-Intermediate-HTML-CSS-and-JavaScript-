document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from submitting automatically
  
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventSelected = document.getElementById('eventSelect').value;
  
    // Empty fields check
    if (!name || !email || !password || !phone || !eventSelected) {
      alert('Please fill all fields.');
      return;
    }
  
    // Name validation
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      alert('Name should contain only letters and spaces.');
      return;
    }
  
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
      alert('Password must be at least 6 characters long and include at least one number and one special character.');
      return;
    }
  
    // Phone number validation
    const phonePattern = /^\d{10}$/; // Exactly 10 digits, no letters, no spaces
    if (!phonePattern.test(phone)) {
      alert('Phone number must be exactly 10 digits (numbers only).');
      return;
    }
  
    // If everything is fine, show success message
    alert(`🎉 Registration Successful! 🎉\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nRegistered for: ${eventSelected}`);
  
    // Optional: Clear the form after successful submission
    document.getElementById('eventForm').reset();
  });
  