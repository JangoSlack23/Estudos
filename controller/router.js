let router = {
	isPage:function(){

			if (/home$|login$|suporte$/ig.test(window.location.href)) {
					let url_atual = window.location.href;
					let sliceUrl = url_atual.split('/').slice(0,5).join('/');
					window.location.href ;
			}else if(/control$/ig.test(window.location.href)){
				router.isAuth();
				
			}else{
				let url_atual = window.location.href;
				let sliceUrl = url_atual.split('/').slice(0,5).join('/');
				window.location.href = sliceUrl+"/erro/"+404;
			}
		},
		isAuth:function(){
				if (localStorage.getItem('isLogin') === null && /login$/ig.test(window.location.href) === false) {	
					let url_atual = window.location.href;
					let sliceUrl = url_atual.split('/').slice(0,5).join('/');
					document.location.assign(sliceUrl+"/login");
				}else{
					 window.location.href;
				}

		}
		
	}

function isBlockLink(){
	 let x  =document.getElementsByClassName("pg"); 
	 let i;
	for (i = 0; i < x.length; i++) {
	    x[i].onclick = function(){ return false };
	}
	
}
document.addEventListener('DOMContentLoaded', function() {
   router.isPage();
   
}, false);
