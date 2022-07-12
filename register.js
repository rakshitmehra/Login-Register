function send() {
	var name = document.createElementById("name");
	var number = document.createElementById("number");
	var email = document.createElementById("email");
	var usr = document.createElementById("usr");
	var pass = document.createElementById("pass");

	if(name==""||number==""||email==""||usr==""||pass==""){
		window.alert("Please fill the required info")
	}
	else{
		var db = firebase.database();
		db.ref(name + number).set({
			name: name,
			number: number,
			email: email,
			username: usr,
			password: pass
		})
	}

//     console.log(name, number)
// }
// 	function compo(){

// 		var db = firebase.database();
// 	    db.ref().once("value".value) =>{
    		// send(
// 	      name: name.value,
// 	      number: number.value,
// 	      email : email.value,
// 	      usr : usr.value,
// 	      pass : pass.value
			// )
// 	})
// 	}
