const button = document.getElementById('toggleButton');
const icon = button.querySelector('.icon'); // Selects the icon within the first toggle button
const text = document.getElementById('textToTogglei');

let isHidden = false;

button.addEventListener('click', () => {
    isHidden = !isHidden;
    text.classList.toggle('hidden', isHidden);

    if (isHidden) {
        // Plus sign
        icon.innerHTML = `
            <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        `;
    } else {
        // Minus sign
        icon.innerHTML = `
            <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
        `;
        button.setAttribute('aria-expanded', !isHidden);
    }
});

// SECOND SECTION
const btn = document.getElementById('toggleButton2');
const svg = btn.querySelector('.icon'); // Selects the icon within the second toggle button
const secondText = document.getElementById('textToTogglei2');

let isSecondHidden = true; // Changed to true

// Set initial icon state to plus
svg.innerHTML = `
    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
`;

btn.addEventListener('click', () => {
    isSecondHidden = !isSecondHidden;
    secondText.classList.toggle('hidden', isSecondHidden);

    if (isSecondHidden) {
        // Plus sign
        svg.innerHTML = `
            <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        `;
    } else {
        // Minus sign
        svg.innerHTML = `
            <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
        `;
        btn.setAttribute('aria-expanded', !isSecondHidden);
    }
});

const btn3 = document.getElementById('toggleButton3');
const svg3 = btn3.querySelector('.icon'); // Corrected to select from btn3
const thirdText = document.getElementById('textToTogglei3');

let isthirdHidden = true; // Changed to true

// Set initial icon state to plus
svg3.innerHTML = `
    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
`;

btn3.addEventListener('click', () => {
    isthirdHidden = !isthirdHidden;
    thirdText.classList.toggle('hidden', isthirdHidden);

    if (isthirdHidden) {
        // Plus sign
        svg3.innerHTML = `
            <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        `;
    } else {
        // Minus sign
        svg3.innerHTML = `
            <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
        `;
        btn3.setAttribute('aria-expanded', !isthirdHidden);
    }
});

const btn4 = document.getElementById('toggleButton4');
const svg4 = btn4.querySelector('.icon'); // Selects the icon inside the button
const fourthText = document.getElementById('textToTogglei4'); // Make sure this ID matches your HTML

let isFourthHidden = true; // Changed to true

// Set initial icon state to plus
svg4.innerHTML = `
    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
`;

btn4.addEventListener('click', () => {
    isFourthHidden = !isFourthHidden;
    fourthText.classList.toggle('hidden', isFourthHidden);

    if (isFourthHidden) {
        // Plus sign
        svg4.innerHTML = `
            <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        `;
    } else {
        // Minus sign
        svg4.innerHTML = `
            <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
        `;
        btn4.setAttribute('aria-expanded', !isFourthHidden);
    }
});
