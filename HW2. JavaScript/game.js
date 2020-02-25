function getGameSeed(n) {
	let digits = '0123456789';
	let result = '';
	let count = n;


	while (count --) {
		let randomIndex = Math.floor(Math.random() * digits.length);
		result += digits[randomIndex];
		digits = digits.slice(0, randomIndex) + digits.slice(randomIndex+1);
	}


	return result
}



function BullsAndCows(n) {
	const secret = getGameSeed(n);

	let question = `Попробуйте угадать число из ${n} уникальных цифр!`;
	let answer = prompt(question);

	while (secret !== answer) {
		let bulls = 0;
		let cows = 0;

		for (let i = 0; i < n; i++) {
			if (secret[i] === answer[i]) {
				bulls = bulls + 1;
			} else if (secret.includes(answer[i])) {
				cows = cows + 1;
			}
		}

		question += `\nПредыдущая попытка ${answer}: Быки - ${bulls}, коровы - ${cows}`;

		answer = prompt(question);
	}

	alert ('Поздравляю с победой')
}

BullsAndCows(4)