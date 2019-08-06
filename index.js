let inited = false;

export default {
	init() {
		if (inited) {
			return false;
		}

		inited = true;

		this.updateElems();

		window.requestAnimationFrame(() => {
			this.doFrame();
		});
	},

	updateElems() {
		this.elems = [];
		Array.from(document.querySelectorAll('[data-elquery]')).forEach(elem => {
			this.elems.push({
				elem: elem,
				breakpoints: this.getElemBreakpoints(elem),
			});
		});
	},

	getElemBreakpoints(elem) {
		const breakpoints = [];

		const breakpointStrings = elem.dataset.elquery.split(',');
		breakpointStrings.forEach(breakpointString => {
			const breakpointParts = breakpointString.split(':');

			breakpoints.push({
				name: breakpointParts[0],
				width: breakpointParts[1] || breakpointParts[0],
			});
		});

		return breakpoints;
	},

	doFrame() {
		this.elems.forEach(elem => {
			const elemWidth = elem.elem.clientWidth;
			elem.breakpoints.forEach(breakpoint => {
				const className = `elquery-${breakpoint.name}`;
				if (elemWidth < breakpoint.width) {
					elem.elem.classList.remove(className);
				} else {
					elem.elem.classList.add(className);
				}
			});
		});

		window.requestAnimationFrame(() => {
			this.doFrame();
		});
	},
};
