/* Hide First 10 Students */
const studentList = document.querySelectorAll('.student-item');

// 01. Hide All Students
$('.student-item').hide();

// 02. Assign values to each student list element
$('.student-item').attr('value', function(i) {
	return i++;
});

// 03. Loop through student list and display (10 per page/1st 10)
for (let i = 0; i < 10; i++) {
	$('.student-item')[i];
	if ( '.student-item'[i] < 10 ) {
		'.student-item'[i].push('.student-list');
	}
}



