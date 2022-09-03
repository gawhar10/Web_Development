// Calculator with basic arithmatic operations.

// Numeric btn (0 - 9)
const D0 = document.querySelector('.D-0');
const D1 = document.querySelector('.D-1');
const D2 = document.querySelector('.D-2');
const D3 = document.querySelector('.D-3');
const D4 = document.querySelector('.D-4');
const D5 = document.querySelector('.D-5');
const D6 = document.querySelector('.D-6');
const D7 = document.querySelector('.D-7');
const D8 = document.querySelector('.D-8');
const D9 = document.querySelector('.D-9');

// Arithmetic btn
const div = document.querySelector('.div');
const mult = document.querySelector('.mult');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const dot = document.querySelector('.Dot');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.all-clear');

// Input Area
let inputField = document.querySelector('.input');

// Global Variables for function 
let arr = [], i = 0, op = '';


// Event Listener For Numeric buttons
D0.addEventListener('click', function() {
	arr[i] = '0';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D1.addEventListener('click', function() {
	arr[i] = '1';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D2.addEventListener('click', function() {
	arr[i] = '2';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D3.addEventListener('click', function() {
	arr[i] = '3';
	console.log(arr);
	i++;
	inputField.value = arr.join('');	
});

D4.addEventListener('click', function() {
	arr[i] = '4';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D5.addEventListener('click', function() {
	arr[i] = '5';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D6.addEventListener('click', function() {
	arr[i] = '6';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D7.addEventListener('click', function() {
	arr[i] = '7';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D8.addEventListener('click', function() {
	arr[i] = '8';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

D9.addEventListener('click', function() {
	arr[i] = '9';
	console.log(arr);
	i++;
	inputField.value = arr.join('');
});

// Decimal point.
dot.addEventListener('click', function() {
	if(arr[i - 1] == '.' || op == '.') {}
	else {
		arr[i] = '.';
		op = '.';
		console.log(arr);
		i++;
		inputField.value = arr.join('');
	}
});

//Adding event listeners to arithmatic buttons
div.addEventListener('click', function() {
	op = '';
	if(i == 0) {}
	else {
		if(arr[i-1] == '/' || arr[i-1] == '*' || arr[i-1] == '+' || arr[i-1] == '-' || arr[i - 1] == '.') {}
		else {
			arr[i] = '/';
			console.log(arr);
			i++;
			inputField.value = arr.join('');
		}
	}

});

mult.addEventListener('click', function() {
	op = '';
	if(i == 0) {}
	else {
		if(arr[i-1] == '/' || arr[i-1] == '*' || arr[i-1] == '+' || arr[i-1] == '-' || arr[i - 1] == '.') {}
		else {
			arr[i] = '*';
			console.log(arr);
			i++;
			inputField.value = arr.join('');
		}
	}
});

add.addEventListener('click', function() {
	op = '';
	if(i == 0) {}
	else {
		if(arr[i-1] == '/' || arr[i-1] == '*' || arr[i-1] == '+' || arr[i-1] == '-' || arr[i - 1] == '.') {}
		else {
			arr[i] = '+';
			console.log(arr);
			i++;
			inputField.value = arr.join('');
		}
	}
});

sub.addEventListener('click', function() {
	op = '';
	if(arr[i-1] == '/' || arr[i-1] == '*' || arr[i-1] == '+' || arr[i-1] == '-' || arr[i - 1] == '.') {}
	else {
		arr[i] = '-';
		console.log(arr);
		i++;
		inputField.value = arr.join('');
	}
});

// All clear button
allClear.addEventListener('click', function() {
	arr = [];
	i = 0;
	op = '';
	inputField.value = 0;
	console.log('(cleaned)');
});

//Main function of Calculator which is added to equal button.
equal.addEventListener('click', function() {
	// if last arr item is arithmatic operator then eliminate that item.
	if(arr[arr.length - 1] == '/' || arr[arr.length - 1] == '*' || arr[arr.length - 1] == '+' || arr[arr.length - 1] == '-' || arr[arr.length - 1] == '.') {
		arr.pop();
		i--;
		const temp = arr.join('');
		console.log(temp);
		const total = eval(temp).toFixed(2);
		console.log(total);
		inputField.value = total;
	} else {
		const temp = arr.join('');
		console.log(temp);
		const total = eval(temp).toFixed(2);
		console.log(total);
		inputField.value = total;
	}
});
