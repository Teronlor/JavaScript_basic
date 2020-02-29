//1. Второе задание
function getObject(number) {
	number = number + '';
	number.length > 3

	return {
		'сотни': number[0] ? number[0] : 0,
		'десятки': number[1],
		'единицы': number[2],
	}
}


getObject(567)


//2. Третье задание