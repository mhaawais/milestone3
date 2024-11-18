// get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//  form submission by button
form.addEventListener('submit', function (event) {
    event.preventDefault(); // no page load
    // input data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // shown resume
    var resumeHTML = "\n      <h2><b>Resume</b></h2>\n      <h3>Personal Information</h3>\n      <p><b>Name : </b>\n      ".concat(name, "\n      <p><b>Email : </b>\n      ").concat(email, "\n      <p><b>Phone Number : </b>\n      ").concat(phone, "\n               <h3>Education</h3>\n                <p>").concat(education, "</P>\n                          <h3>Experience</h3>\n                          <p>").concat(experience, "</p>\n                                        <h3>Skills</h3>\n                                        <p>").concat(skills, "</p>    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume Missing.');
    }
});
