this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Dear Toota, From the moment i joined that gc, and when i saw how we talked, matching the energy, it was the best thing that happened to me. Heres a website i built for your birthday. Hope u like it, and have a wonderful birthday, congrats! on being 15. Mwah";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
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

// Dear Toota, From the moment i joined that gc, and when i saw how we talked, matching the energy, it was the best thing that happened to me. Heres a website i built for your birthday. Hope u like it, and have a wonderful birthday, congrats! on being 15. Mwah