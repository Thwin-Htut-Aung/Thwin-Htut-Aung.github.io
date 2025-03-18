function openTab(event, tabName){
    var i, tabcontent, tablinks;

    //Hide all tab content elements
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    //Remove the 'active' class from all the tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    //Show the selected tab and set its link's class to 'active'
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function validation(form){
    
    var id=document.frm.id.value;
    var email=document.frm.ema.value;
    var atsign=email.indexOf("@");
    var dotsign=email.lastIndexOf(".");
    var pass=document.frm.pas.value;  
    var cpass=document.frm.cpas.value;
    var phone=document.frm.ph.value; 
   
    if(isNaN(id)){
        document.getElementById("e1").innerHTML="The national ID must be a number.";
        document.getElementById("e2").innerHTML="";
        document.getElementById("e3").innerHTML="";
        document.getElementById("e4").innerHTML="";
        document.getElementById("e5").innerHTML="";
        document.getElementById("e6").innerHTML="";
        return false;
    }

    else if(atsign<1 || dotsign<atsign+2 || dotsign+4!=email.length){                                                       
        document.getElementById("e2").innerHTML="Invalid email format.";
        document.getElementById("e1").innerHTML="";
        document.getElementById("e3").innerHTML="";
        document.getElementById("e4").innerHTML="";
        document.getElementById("e5").innerHTML="";
        document.getElementById("e6").innerHTML="";
        return false;
    }

    else if(pass != cpass)
   {
    document.getElementById("e3").innerHTML="Please make sure your password and confirmed password match.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e6").innerHTML="";
    return false; 
   }
   
    else if(isNaN(phone)){
        document.getElementById("e4").innerHTML="The contact number must be a number.";
        document.getElementById("e1").innerHTML="";
        document.getElementById("e2").innerHTML="";
        document.getElementById("e3").innerHTML="";
        document.getElementById("e5").innerHTML="";
        document.getElementById("e6").innerHTML="";
   return false;
    }

    else if(!checkRadioButtons(document.frm.gen))
{                     
document.getElementById("e5").innerHTML="Please choose your gender.";
document.getElementById("e1").innerHTML="";
document.getElementById("e2").innerHTML="";
document.getElementById("e3").innerHTML="";
document.getElementById("e4").innerHTML="";
document.getElementById("e6").innerHTML="";
return false;
 }

   else if(!document.frm.check.checked){
    document.getElementById("e6").innerHTML="Please agree to our terms and privacy policy.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
       return false;
   }
    
   else{
    alert("You have successfully created an account.");
    return true;
     }

    } 

   function checkRadioButtons(radioButtons){
    for (var i=0; i<radioButtons.length; i++){
    if (radioButtons[i].checked){
    return true;
     }
    } }

    function addStudent() {
			
        var name = document.adminfrm.name.value;
        var id = document.adminfrm.id.value;
        var email = document.adminfrm.ema.value;
        var pass = document.adminfrm.pas.value;
        var phone = document.adminfrm.ph.value;
        var gender = document.adminfrm.gen.value;
        const detail = JSON.stringify([id, email, pass, phone, gender]);
        localStorage.setItem(name, detail);
        showAll();
    }

    function editStudent() {
        var name = document.adminfrm.name.value;
        let data = JSON.parse(localStorage.getItem(name));
        document.adminfrm.id.value = data[0];
        document.adminfrm.ema.value = data[1];
        document.adminfrm.pas.value = data[2];
        document.adminfrm.ph.value = data[3];
        document.adminfrm.gen.value = data[4];
    }
    
    function deleteStudent() {
        var name = document.adminfrm.name.value;
        localStorage.removeItem(name);
        showAll();
        document.adminfrm.name.value = null;
        document.adminfrm.id.value = null;
        document.adminfrm.ema.value = null;
        document.adminfrm.pas.value = null;
        document.adminfrm.ph.value = null;
        document.adminfrm.gen.value = null;
    }
    
    function clearAll() {
        localStorage.clear();
        showAll();
        document.adminfrm.name.value = null;
        document.adminfrm.id.value = null;
        document.adminfrm.ema.value = null;
        document.adminfrm.pas.value = null;
        document.adminfrm.ph.value = null;
        document.adminfrm.gen.value = null;
    }

    function showAll() {

		var key = "";
		var list = "<tr><th>Name</th><th>National ID</th><th>Email</th><th>Password</th><th>Contact No.</th><th>Gender</th></tr>\n";
		var i = 0;

		if (localStorage.length == 0) {
			list += "<tr><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td></tr>\n";
		  } else {
			for (i = 0; i < localStorage.length; i++) {

			  key = localStorage.key(i);
			  let data = JSON.parse(localStorage.getItem(key));

			  list += "<tr><td>" + key + "</td>\n<td>" +
				data[0] + "</td>\n<td>" + data[1] + "</td>\n<td>" + data[2] + "</td>\n<td>" + data[3] + "</td>\n<td>" + 
                data[4] + "</td></tr>\n";

			}
		}
		document.getElementById('studentlist').innerHTML = list;

}