document.getElementById('submit').addEventListener('click', sendEmail);
function sendEmail(ev) {
    ev.preventDefault();
    const email=document.getElementById('email');
    const subject=document.getElementById('subject');
    const body=document.getElementById('message');
    const success=document.getElementById('success');
    const emailRegex=/\S+@\S+\.\S+/;
    if (emailRegex.test(email.value)) {
        if (subject.value !== '' || body.value !== '') {
            Email.send({
                SecureToken: "ada370ba-e096-447f-b12f-2364fb1b5bf9",
                To: 'samerelmaz@gmail.com',
                From: 'samdevpr@gmail.com',
                Subject: subject.value,
                Body: '<h3>Client email is</h3>'+email.value+'<h3>Body</h3>'+body.value
            }).then((res) => {
                if (res !=='OK') {
                    success.textContent='Error sending message. Please contact me at samerelmaz@gmail.com';
                } else {
                    success.textContent='Message sent succesfully!';
                }  
            });
        } else {
            success.textContent="Please specify a subject or message!";
        }
    } else {
        success.textContent="Invalid email!";
    }
    success.style.display='block';
}