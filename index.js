export default {
	init() {
		this.updateElemList();

		this.addEventListeners([
			'DOMContentLoaded',
			'load',
			'resize',
		], this.updateAllElemSizes);
	},

	updateElemList() {
		if (this.elemList === undefined) {
			this.elemList = [];
		}

		const newElems = [];

		this.elemList = Array.from(document.querySelectorAll('[data-elquery]')).forEach(elem => {
			if (this.elemList.indexOf(elem) === -1) {
				this.elemList.push(elem);
				newElems.push(elem);

				elem.classList.add('elquery');
			}
		});

		return newElems;
	},

	addEventListeners(listeners, callback) {
		callback();
		eventListeners.forEach(listener => {
			window.addEventListener(listener, callback);
		});
	},

	getElemBreakpoints(elem) {
		let breakpoints = elem.dataset.elquery.split(',');
		breakpoints.forEach((breakpoint, index) => {
			breakpoints[index] = parseInt(breakpoint, 10);
		});
		return breakpoints;
	},

	updateElemSize(elem) {
		const breakpoints = this.getElemBreakpoints(elem);
		const elemWidth = elem.clientWidth;

		breakpoints.forEach(breakpoint => {
			const className = `elquery-${breakpoint}`;

			if (elemWidth < breakpoint) {
				elem.classList.remove(className);
			} else {
				elem.classList.add(className);
			}
		});
	},

	updateAllElemSizes() {
		this.elemList.forEach(elem => {
			this.updateElemSize(elem);
		});

		const newElems = this.updateElemList();
		if (newElems.length > 0) {
			newElems.forEach(elem => {
				this.updateElemSize(elem);
			})
		}
	},
};