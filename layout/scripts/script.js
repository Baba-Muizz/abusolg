function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


 // contact form validation
function validateForm() {
  var name =document.getElementById('name').value;
  var message=document.getElementById('message').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  var answer=document.getElementById('Answer');
  
  if (name =="" || message=="" || email=="" || phone=="") {
      answer.innerHTML="Fill All fields";
      return false;
  }
  
}
// to input only text in name
function validateName(event) {
  char=event.which;
  if(char >31 && char !=32 && (char <65 || char >90) && (char <97 || char >122)) {
      return false;
  }
}
