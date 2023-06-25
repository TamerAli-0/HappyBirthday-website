this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Dear Lulu, From the moment i joined that that very channel and catto found me, and introduced me to u <3, it was the best fluffing day i have ever had, you brought light into my life, with your cute smile and adorable personality, it really was the best thing that has ever happened to me, i smile whenever i see you happy and when i make you laugh, i feel sad when i see u sad and depressed, i love the way you are right now, ik you have difficulities in life but im sure you'll pass them all, i'll be here for you everytime, holding your hands in future, being together with you. going through thick and thin for eachother, i wanna protect you with anything i got, sad thing is that it'll take a bit long for us to meet, but i don't care, i'll wait for you, even if you've gone to the ends of the earth i'll always and stil love you, happy early 20th birthday, hope you have amazing days, im sure there will be days full of happiness, and Lastly i hope we stay together and count on me with anything <3 I love you monse!.  MWAH";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}

// Dear Lulu, From the moment i joined that that very channel and catto found me, and introduced me to u <3, it was the best fluffing day i have ever had, you brought light into my life, with your cute smile and adorable personality, it really was the best thing that has ever happened to, i smile whenever i see you happy and laugh at my messages, i feel sad when i see u sad and depressed, i love the way you are right now, ik you have difficulities in life but im sure youll pass them all, ill be here for you everytime, holding your hands in future, being together with you. going through hard and thin for eachother, i wanna protect you with anything i got, sad thing is that itll take a bit long for us to meet, but i don't care, i'll wait for you, even if you've gone to the ends of the earth ill always and stil love you, happy 20th birthday, hope you have amazing days, im sure there will be days full of happiness, and Lastly i hope we stay together and count on me with anything <33333 I love you monse!