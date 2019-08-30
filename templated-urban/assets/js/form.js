<!--
function getCookie(name){
	var cname=name + "=";
	var dc=document.cookie;
	if (dc.length > 0){
		begin=dc.indexOf(cname);
		if (begin != -1){
			begin += cname.length;
			end=dc.indexOf(";", begin);
			if (end == -1) end=dc.length;
			return unescape(dc.substring(begin, end));
		}
	}
	return null;
}

function setCookie(name, value){
	var now=new Date();
	var then=new Date(now.getTime() + 31536000000);
	document.cookie=name + "=" + escape(value) + "; expires=" + then.toGMTString() + "; path=/";
}

function getInfo(form){
	form.info.value="Browser Information: " + navigator.userAgent;
}

function getValue(element){
	var value=getCookie(element.name);
	if (value != null) element.value=value;
}

function setValue(element){
	setCookie(element.name, element.value);
}

function fixElement(element, message){
	alert(message);
	element.focus();
}

function isMailReady(form){
	var passed=false;
	if (form.fullname.value == ""){
	fixElement(form.fullname, "coloque seu nome.");
	}
	else if (form.email.value.indexOf("@") == -1 || form.email.value.indexOf(".") == -1){
		fixElement(form.email, "coloque um e-mail válido.");
	}
	else if (form.message.value == ""){
		fixElement(form.message, "coloque uma mensagem.");
	}
	else{
		getInfo(form);
		passed=true;
	}
	return passed;
}
// End -->