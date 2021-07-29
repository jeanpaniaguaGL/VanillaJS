const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Event listeners
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
});

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
