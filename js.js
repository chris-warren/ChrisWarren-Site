
function test(scrollTo){
	document.getElementById(scrollTo).scrollIntoView({
		behavior: 'smooth'
	});
};

function log() {
	console.log('Clicked');
	document.getElementById('body_id').classList.add('cursor_class');
	document.getElementById('sword_button').classList.add('hidden_class');
};