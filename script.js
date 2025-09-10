/* ===== GLOBAL VARIABLES ===== */
// Global scope variables accessible throughout the script
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

/* ===== PART 1: BOX ANIMATION ===== */
/**
 * Toggles the 'pulse' class to start/stop CSS animation.
 * Demonstrates:
 * - Using global variable 'box'
 * - Return value
 */
function togglePulseAnimation() {
  box.classList.toggle('pulse');
  return box.classList.contains('pulse') ? "Pulse started" : "Pulse stopped";
}

// Event listener to trigger box animation
animateBtn.addEventListener('click', () => {
  const status = togglePulseAnimation();
  console.log(status); // Logs message to console
});

/* ===== PART 2: CARD FLIP ===== */
/* Handled purely by CSS hover; no JS needed */

/* ===== PART 3: MODAL POPUP ===== */
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.classList.add('show'); // triggers CSS slide/fade
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
});

/* ===== DEMONSTRATE LOCAL VS GLOBAL SCOPE ===== */
/**
 * greetUser(name) demonstrates:
 * - Local variable 'greeting' (only accessible inside this function)
 * - Return value used outside
 */
function greetUser(name) {
  let greeting = `Hello, ${name}! Welcome to this interactive page.`; // LOCAL variable
  console.log("Inside function (local):", greeting); // Works here
  return greeting; // Return value can be used outside
}

// Using the function and storing its return value
const userMessage = greetUser('Rosemary');
console.log("Outside function (return value):", userMessage);


