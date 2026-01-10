// ===============================
// FORM VALIDATION
// ===============================
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.marginTop = '0.5rem';
    const form = document.querySelector('form');
    form.prepend(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.textContent = message;
    successDiv.style.color = 'green';
    successDiv.style.marginTop = '0.5rem';
    const form = document.querySelector('form');
    form.prepend(successDiv);
    setTimeout(() => successDiv.remove(), 3000);
}

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) return showError('Please enter your name');
    if (!email.includes('@') || !email.includes('.')) return showError('Please enter a valid email');
    if (message.length < 10) return showError('Message must be at least 10 characters');

    showSuccess('Message sent successfully!');
    document.querySelector('form').reset();
}

document.querySelector('form').addEventListener('submit', validateForm);

// ===============================
// DARK MODE TOGGLE
// ===============================
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Toggle Dark Mode';
darkModeBtn.style.margin = '1rem';
darkModeBtn.style.padding = '0.5rem 1rem';
darkModeBtn.style.cursor = 'pointer';
document.body.prepend(darkModeBtn);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

darkModeBtn.addEventListener('click', toggleDarkMode);

// ===============================
// SHOW/HIDE SKILLS
// ===============================
const toggleSkillsBtn = document.createElement('button');
toggleSkillsBtn.textContent = 'Toggle Skills';
toggleSkillsBtn.style.margin = '1rem';
toggleSkillsBtn.style.padding = '0.5rem 1rem';
toggleSkillsBtn.style.cursor = 'pointer';
document.getElementById('skills').prepend(toggleSkillsBtn);

toggleSkillsBtn.addEventListener('click', () => {
    const skillsList = document.querySelector('#skills ul');
    skillsList.style.display = (skillsList.style.display === 'none') ? 'block' : 'none';
});

// ===============================
// PROFILE IMAGE SLIDER
// ===============================
const aboutSection = document.getElementById('about');
const images = [
    'images/profile.jpg',
    'images/profile2.jpg',
    'images/profile3.jpg'
];

let currentIndex = 0;
const sliderImg = document.createElement('img');
sliderImg.src = images[currentIndex];
sliderImg.classList.add('profile-img');
aboutSection.insertBefore(sliderImg, aboutSection.firstChild);

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
}

setInterval(nextImage, 3000);
