// Pure frontend UI only – no data capture, no network calls

document.addEventListener('DOMContentLoaded', () => {
  const emailStep = document.getElementById('email-step');
  const passwordStep = document.getElementById('password-step');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nextBtn = document.getElementById('next-btn');
  const signinBtn = document.getElementById('signin-btn');
  const chipEmail = document.getElementById('chip-email');
  const showPassword = document.getElementById('show-password');
  const accountChip = document.getElementById('account-chip');

  // Next → show password step
  nextBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (!email) {
      emailInput.focus();
      emailInput.style.borderColor = '#d93025';
      return;
    }
    emailInput.style.borderColor = '';
    chipEmail.textContent = email;
    emailStep.classList.add('hidden');
    passwordStep.classList.remove('hidden');
    passwordInput.focus();
  });

  // Enter key on email field
  emailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextBtn.click();
    }
  });

  // Show / hide password
  showPassword.addEventListener('change', () => {
    passwordInput.type = showPassword.checked ? 'text' : 'password';
  });

  // Clicking the chip goes back to email step
  accountChip.addEventListener('click', () => {
    passwordStep.classList.add('hidden');
    emailStep.classList.remove('hidden');
    emailInput.focus();
  });

  // Sign-in button (UI only – does nothing except visual feedback)
  signinBtn.addEventListener('click', () => {
    if (!passwordInput.value) {
      passwordInput.focus();
      passwordInput.style.borderColor = '#d93025';
      return;
    }
    // No capture, no redirect – pure frontend demo
    signinBtn.textContent = 'Signing in…';
    signinBtn.disabled = true;
    setTimeout(() => {
      signinBtn.textContent = 'Next';
      signinBtn.disabled = false;
      alert('UI demo only – nothing was sent or stored.');
    }, 800);
  });

  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      signinBtn.click();
    }
  });
});