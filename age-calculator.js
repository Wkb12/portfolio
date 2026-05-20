(function(){
    'use strict';

    function calculateAgeParts(birthDate) {
        var now = new Date();
        var years = now.getFullYear() - birthDate.getFullYear();
        var months = now.getMonth() - birthDate.getMonth();
        var days = now.getDate() - birthDate.getDate();

        if (days < 0) {
            months -= 1;
            var prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += prevMonthDays;
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return { years: years, months: months, days: days };
    }

    function formatAge(parts) {
        var pieces = [];
        pieces.push(parts.years + ' year' + (parts.years !== 1 ? 's' : ''));
        if (parts.months) pieces.push(parts.months + ' month' + (parts.months !== 1 ? 's' : ''));
        if (parts.days) pieces.push(parts.days + ' day' + (parts.days !== 1 ? 's' : ''));
        return pieces.join(', ');
    }

    function attachTo(wrapper) {
        var input = wrapper.querySelector('.age-input');
        var btn = wrapper.querySelector('.age-btn');
        var resultEl = wrapper.querySelector('.age-result');
        if (!input || !btn || !resultEl) return;

        function runCalc() {
            var val = input.value;
            if (!val) {
                resultEl.textContent = 'Please choose your birth date.';
                return;
            }
            var b = new Date(val);
            if (isNaN(b.getTime())) {
                resultEl.textContent = 'Invalid date.';
                return;
            }
            var parts = calculateAgeParts(b);
            resultEl.textContent = 'You are ' + formatAge(parts) + ' old.';
        }

        btn.addEventListener('click', runCalc, { passive: true });
        input.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); runCalc(); } });
    }

    // Initialize all .age-calculator blocks on DOMContentLoaded
    function init() {
        var wrappers = document.querySelectorAll('.age-calculator');
        wrappers.forEach(function(w){ attachTo(w); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { passive: true });
    } else {
        init();
    }
})();
