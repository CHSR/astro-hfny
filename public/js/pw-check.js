// JavaScript Document

//JSLogin: Lines 43-76 set up the login page 
	//<!--
	// If the cookie exists, forward to MIS page
	if (document.cookie.indexOf("passwordOk=true") != -1)
		window.location = "mis_forms.htm";

	// This will allow the hash functionality to be used when checking the password
	String.prototype.hashCode = function(){
		var hash = 0;
		if (this.length == 0) return hash;
		for (i = 0; i < this.length; i++) {
			chr = this.charCodeAt(i);
			hash = ((hash<<5)-hash) + chr;
			hash = hash & hash;
			}
		return hash;
		}

	// Perform the password check. If it's good, set a cookie and redirect; otherwise display an error message.
	function checkPassword() {
		if ($("#password").prop("value").hashCode() == 1245034105) {
			document.cookie = "passwordOk=true";
			window.location = "mis_forms.htm";
			}
		else {
			$("#password").val("");
			$("#errorText").text("Incorrect password. Please try again.");
			}
		return false;
		}
	//-->
