// Simple age calculator: reads a date input and shows years, months, days.
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('birthdate-page');
    const btn = document.querySelector('.age-btn');
    const out = document.querySelector('.age-result');

    if (!input || !btn || !out) return;

    function calculateAge(birth) {
        const now = new Date();
        let years = now.getFullYear() - birth.getFullYear();
        let months = now.getMonth() - birth.getMonth();
        let days = now.getDate() - birth.getDate();

        if (days < 0) {
            months -= 1;
            const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += prevMonthDays;
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        return { years, months, days };
    }

    function formatAge({ years, months, days }) {
        const parts = [];
        parts.push(`${years} year${years !== 1 ? 's' : ''}`);
        if (months) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
        if (days) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
        return parts.join(', ');
    }

    function showMessage(msg) {
        out.textContent = msg;
    }

    function update() {
        if (!input.value) return showMessage('Please choose your birth date.');
        const birth = new Date(input.value);
        if (isNaN(birth.getTime())) return showMessage('Invalid date.');
        const age = calculateAge(birth);
        showMessage(`You are ${formatAge(age)} old.`);
    }

    // Update when the date changes, when button clicked, or when Enter pressed
    input.addEventListener('input', update);
    btn.addEventListener('click', update);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') update(); });

    // Optional: show initial placeholder text
    showMessage('Pick your birth date and click Calculate.');
});
