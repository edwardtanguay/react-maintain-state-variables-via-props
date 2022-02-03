const _emptyPassenger = {
	id: 0,
	genericTitle: '',
	name: '',
	airport: 'Berlin',
	start: '',
	end: ''
};

const passengers = [_emptyPassenger, _emptyPassenger];

passengers.forEach((passenger, index) => {
	passenger.id = index;
	passenger.genericTitle = `Passenger #${index + 1}`;
	console.log(passenger.id);
	console.log(passenger.genericTitle);
});


console.log(passengers);