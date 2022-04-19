window.addEventListener('scroll', function(){
		let scroll = document.querySelector('.scrollTop')
		scroll.classList.toggle('active', window.scrollY > 800)
})

function backTop(){
				window.scrollTo({
					top:0,
					behavior:"smooth"
				}	)
}

 AOS.init({
     offset: 200,
      duration: 900,
    //  easing: 'ease-in-sine',
       delay: 0,
     });
