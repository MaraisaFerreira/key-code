const container = document.querySelector('.container');

window.addEventListener('keydown', (ev) => {
	let template = `
    <div class="card">
        ${ev.key === ' ' ? 'Space' : ev.key} 
        <small>tecla</small>
    </div>
    <div class="card">
        ${ev.keyCode} 
        <small>código</small>
    </div>
    <div class="card">
        ${ev.code} 
        <small>event.code</small>
    </div>
    `;

	container.innerHTML = template;
});
