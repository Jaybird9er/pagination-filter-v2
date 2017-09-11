// Assign student-list items to constant
const studentList = document.querySelectorAll('.student-item');
// Determine Page Count ~ (10 students/page)
const pageCount = Math.ceil(document.querySelector('.student-list').childElementCount / 10);

// showPage funciton removes entire list and then repopulates with first 10 students.
const showPage = ( pageNum, listOfStudents ) => {
	// Removes entire list
	$(studentList).css('display', 'none');
	// Itterates through list to count student-items
	for (let i = 0; i < 10; i++) {
		let list = document.querySelectorAll('.student-item')[i];
		// Change display value of items that meet criteria
		$(list).css('display', 'block');
	}
}

$(showPage);

// Dynamically create pagination links
const linkSection = document.querySelector(".pagination ul");

let pageLinks = () => {
	for (let i = 1; i < pageCount; i += 1) {
		let li = '<li><a href="#">' + i + '</a></li>';
		return li;
	}
}

$(linkSection).html(pageLinks);
//console.log(pageLinks);