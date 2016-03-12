var sign_in = (function() {

	var template = `
	<div class="col-xs-12">
		<p>
		<h4>Sign in... OR ELSE!</h4>
		<p>
		<input id="sign-in-email" type="email" placeholder="email"/>
		<p>
		<input id="sign-in-password" type="password" placeholder="password"/>
		<p>
		<input id="sign-in" type="submit" placeholder="Sign in" />
		<p>
		<a>New? I'm not surprised.</a>
		</p>
	</div>
	`;

	var onSignIn = function(){
		var email = document.getElementById('sign-in-email').innerHTML;
		var password = document.getElementById('sign-in-password').innerHTML;

		// xmlhttprequest to server
	}

	var setTemplate = function(){
		document.getElementById('container').innerHTML = template;
	}

	return {
		onSignIn: onSignIn,
		setTemplate: setTemplate
	}
})();
