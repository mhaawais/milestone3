// get references to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//  form submission by button

form.addEventListener('submit', (event: Event)  => {
    event.preventDefault();      // no page load

    // input data
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone number') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // shown resume
      const resumeHTML = `
      <h2><b>Resume</b></h2>

      <h3>Personal Information</h3>
      <p><b>Name : </b>
      ${name}</p>
      <p><b>Email : </b>
      ${email}</p>
      <p><b>Phone Number : </b>
      ${phone}</p>

   
      <h3>Education</h3>
      <p>${education}</P><
      
      
      h3>Experience</h3>
      <p>${experience}</p>


      <h3>Skills</h3>
      <p>${skills}</p>  `


//   to Display Resume      
if(resumeDisplayElement) {
resumeDisplayElement.innerHTML = resumeHTML;
}      else{
console.error('Resume Missing.')
}

})
