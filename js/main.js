/* Hide First 10 Students */
const studentList = document.querySelectorAll('.student-item');

// showPage removes entire list and then repopulates with first 10 students.
const showPage = ( pageNum, listOfStudents ) => {
	// Removes entire list
	$(studentList).css('display', 'none');
	// 
	for (let i = 0; i < 10; i++) {
		let list = document.querySelectorAll('.student-item')[i];
		$(list).css('display', 'block');
	}
}

$(showPage);


