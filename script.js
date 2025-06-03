const password = document.getElementById('password');
const email = document.getElementById('email');
const background = document.getElementById('background');
const form = document.getElementById('loginForm');

// Adjust blur based on password length
password.addEventListener('input', (e) => {
  const value = e.target.value;
  const blurValue = Math.max(0, 20 - value.length * 2);
  background.style.filter = `blur(${blurValue}px)`;
});

// Form submit with validation
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value;

  if (!validateEmail(emailValue)) {
    alert('❌ Please enter a valid email address.');
    return;
  }

  if (passwordValue.length < 6) {
    alert('❌ Password must be at least 6 characters.');
    return;
  }

  // Simulate success (you can replace with real backend logic)
  alert('✅ Form submitted successfully!');
  form.reset();
  background.style.filter = `blur(20px)`; // Reset background
});

// Simple email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
