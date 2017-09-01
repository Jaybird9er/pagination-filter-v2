/* Hide First 10 Students */
const studentList = document.querySelectorAll('.student-item');

const showPage = ( pageNum, listOfStudents ) => {
	$(studentList).css('display', 'none');
	for (let i = 0; i < 10; i++) {
		let list = document.querySelectorAll('.student-item')[i];
		$(list).css('display', 'block');
	}
}

$(showPage);
// 01. Hide All Students
//$(studentList).css('display', 'none');

/*// 02. Assign values to each student list element
$('.student-item').attr('value', function(i) {
	return i++;
});*/

// 03. Loop through student list and display (10 per page/1st 10)
/*for (let i = 0; i < 10; i++) {
	let list = document.querySelectorAll('.student-item')[i];
	$(list).css('display', 'block');
	//$(studentList).show().attr('value', function(i){});
}


*/


