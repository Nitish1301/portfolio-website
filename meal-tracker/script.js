// Data Store
let meals = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: []
};

// DOM Elements
const modal = document.getElementById('add-meal-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal');
const addMealForm = document.getElementById('add-meal-form');
const mealTypeSelect = document.getElementById('meal-type-select');

// Analytics Elements
const totalCalsEl = document.getElementById('total-cals');
const valProteinComp = document.getElementById('val-protein');
const valCarbsComp = document.getElementById('val-carbs');
const valFatsComp = document.getElementById('val-fats');
const progressRing = document.querySelector('.progress-ring__circle');
const barProtein = document.querySelector('.bar-fill.protein');
const barCarbs = document.querySelector('.bar-fill.carbs');
const barFats = document.querySelector('.bar-fill.fats');

const DAILY_GOAL = 2000;
const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Set current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', options);

    // Initialize Progress Ring
    progressRing.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
    progressRing.style.strokeDashoffset = CIRCUMFERENCE;

    renderMeals();
    updateAnalytics();

    // Smooth Scroll
    document.querySelectorAll('button[data-target]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = document.getElementById(e.target.dataset.target);
            if (target) target.scrollIntoView({ behavior: 'smooth' });

            // Active state
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Animate Hero CTA
    document.getElementById('hero-cta').addEventListener('click', () => {
        document.querySelector('.tracker-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal Functions
function openModal(preselectType = 'Breakfast') {
    mealTypeSelect.value = preselectType;
    modal.classList.add('active');
    document.getElementById('food-name').focus();
}

function closeModal() {
    modal.classList.remove('active');
    addMealForm.reset();
}

openModalBtn.addEventListener('click', () => openModal());
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Form Submission
addMealForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const type = mealTypeSelect.value;
    const name = document.getElementById('food-name').value;
    const calories = parseInt(document.getElementById('calories').value) || 0;
    const protein = parseInt(document.getElementById('protein').value) || 0;
    const carbs = parseInt(document.getElementById('carbs').value) || 0;
    const fats = parseInt(document.getElementById('fats').value) || 0;

    const newMeal = {
        id: Date.now(),
        name,
        calories,
        macros: { protein, carbs, fats }
    };

    meals[type].push(newMeal);

    renderMeals();
    updateAnalytics();
    closeModal();
});

// Render Functions
function renderMeals() {
    for (const [type, items] of Object.entries(meals)) {
        const listEl = document.getElementById(`list-${type}`);
        const cardEl = document.querySelector(`.meal-card[data-type="${type}"]`);
        const badgeEl = cardEl.querySelector('.cal-badge');

        // Calculate section total
        const sectionCals = items.reduce((sum, item) => sum + item.calories, 0);
        badgeEl.innerText = `${sectionCals} kcal`;

        // Render List
        if (items.length === 0) {
            listEl.innerHTML = '<li class="empty-msg">No items yet</li>';
        } else {
            listEl.innerHTML = items.map(item => `
                <li>
                    <span>${item.name}</span>
                    <span>${item.calories}</span>
                </li>
            `).join('');
        }
    }
}

const pieChart = document.getElementById('macro-pie-chart');

// ... (keep existing code)

function updateAnalytics() {
    let totalCals = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    // Aggregate Data
    Object.values(meals).flat().forEach(meal => {
        totalCals += meal.calories;
        totalProtein += meal.macros.protein;
        totalCarbs += meal.macros.carbs;
        totalFats += meal.macros.fats;
    });

    // Update UI Numbers
    animateValue(totalCalsEl, parseInt(totalCalsEl.innerText), totalCals, 1000);
    valProteinComp.innerText = `${totalProtein}g`;
    valCarbsComp.innerText = `${totalCarbs}g`;
    valFatsComp.innerText = `${totalFats}g`;

    // Update Progress Ring
    const progress = Math.min(totalCals / DAILY_GOAL, 1);
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    progressRing.style.strokeDashoffset = offset;

    // Update Pie Chart
    const totalMacros = totalProtein + totalCarbs + totalFats;
    if (totalMacros > 0) {
        const pProtein = (totalProtein / totalMacros) * 100;
        const pCarbs = (totalCarbs / totalMacros) * 100;
        const pFats = (totalFats / totalMacros) * 100;

        pieChart.style.background = `conic-gradient(
            #FC8181 0% ${pProtein}%,
            #63B3ED ${pProtein}% ${pProtein + pCarbs}%,
            #F6E05E ${pProtein + pCarbs}% 100%
        )`;
    } else {
        pieChart.style.background = `conic-gradient(#EDF2F7 0% 100%)`;
    }
}

// Utility: Number Animation
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
