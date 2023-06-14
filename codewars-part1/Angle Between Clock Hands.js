function handAngle (date) {
	let hour = date.getHours() ;
	let minute = date.getMinutes();
	let minAngle = minute*6;
	let hourAngle = hour * 30 + minute * 0.5;
	let angleBetween = 0;
	if (minAngle - hourAngle == 360 || minAngle - hourAngle == - 360) {return 0.0}
	if (minAngle - hourAngle > 180 || minAngle - hourAngle < -180) {
		angleBetween = 360 - (Math.max(minAngle,hourAngle) - Math.min(minAngle,hourAngle));
	} else {angleBetween = Math.max(minAngle,hourAngle) - Math.min(minAngle,hourAngle)}
	return angleBetween * (Math.PI/180);
}