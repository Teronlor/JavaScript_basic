let ticTakToe = {
	gameTableElement: document.getElementById('game'),
	status: 'playing',
	mapValues: [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	],
	phase: 'X';

	init() {

		this.renderMap();
		this.initEventHandlers();
	},


	renderMap() {
		for (let row = 0; row < 3; row ++) {
			const tr = document.createElement('tr');
			this.gameTableElement.appendChild(tr);
			for (let col = 0; col < 3; col++) {
				let td = document.createElement('td');
				td.dataset.row = row.toString();
				td.dataset.col = col.toString();
				tr.appendChild(td);
			}
		}
	},

	initEventHandlers() {
		this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
	},

	cellClickHandler(event) {
		if (!this.isCorrectClick(event)) {
			return;
		}

		this.fillCell(event);

		if (this.hasWon()) {
			this.setStatusStopped();
			this.sayWonPhrase();
		}
	},

	isCorrectClick(event) {
		return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
	},

	isStatusPlaying() {
		return this.status === 'playing';
	},

	isClickByCell(event) {
		return event.target.tagName === 'TD';
	},

	isCellEmpty(event) {
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		return this.mapValues[row][col] === '';
	},

	fillCell(event){
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		this.mapValues[row][col] = this.phase;
		event.target.textContext = this.phase;
	},

};

window.addEventListener('load', ticTakToe.init());