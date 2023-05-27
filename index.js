// Contact form javascript
function sendemail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ug4z82g";
  const templateID = "template_xi44oub";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        // console.log(res);
        alert("Thank you, your message sent successfully")
    })
    .catch(err=>alert("Error sending message"));
}

