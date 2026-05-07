(function() {
	var root = document.documentElement;
	var toggle = document.getElementById('theme-toggle');
	if (!toggle) return;

	var label = toggle.querySelector('.theme-toggle-label');

	function setTheme(theme) {
		root.dataset.theme = theme;
		localStorage.setItem('portfolio-theme', theme);
		var isDark = theme === 'dark';
		toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
		toggle.setAttribute('aria-label', isDark ? 'Switch to bright mode' : 'Switch to dark mode');
		if (label) label.textContent = isDark ? 'Bright' : 'Dark';
	}

	toggle.addEventListener('click', function() {
		setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
	});

	setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
})();
