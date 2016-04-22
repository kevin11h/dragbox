$('.column').sortable({
	connectWith: '.column',
	handle: 'h2',
	cursor: 'move',
	placeholder: 'placeholder',
	forcePlaceholderSize: true,
	opacity: 0.4,
}).disableSelection();