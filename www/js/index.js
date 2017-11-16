$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	}); 
    
});

	function randomBoolean() {
		
		var randomValue = prompt ("Which output do you want?");
		
		if (randomValue == "1"){
			navigator.notification.beep(1); 
		} else if (randomValue == "2"){
			navigator.notification.beep(2);
		}
		
}
