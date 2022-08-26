// Right Nav Dropdown Function
$(".Profile").on("click",function(){
    $(".dropdown-profile").toggle();
    $(".dropdown-bell").hide();
   
});

$(".nab-link-p").on("click",function(){

    $(".dropdown-bell").toggle();
    $(".dropdown-profile").hide();
   
});



// Left Column Toggle Function 

$(".toggle").on("click",function(){
    $(".seemore").show();
    $(".toggle").hide();
});


$(".toggle-Up").on("click",function(){
    $(".seemore").hide();
    $(".toggle").show();
});



// Left Column Hover Function

$(".Shotcut-Grup").on("mouseover",function(){
    $(".btn-sm").css("backgroundColor","lightgray");
    $(".btn-sm").css("color","#1778F2"); 
});

$(".Shotcut-Grup").on("mouseleave",function(){
    $(".btn-sm").css("backgroundColor","transparent");
    $(".btn-sm").css("color","transparent"); 
});







// Middle Column Slider Function 

$(".carosal-button").on("click",function(){
    $(".carosal-button-hover").css("backgroundColor", "#fff");
    $(".carosal-button-hover").css("color", "#000");
    $(".carosal-button-hover").css({opacity:1});
      
});

$(".Room-tab").on("mouseleave",function(){
    $(".carosal-button-hover").css("backgroundColor","transparent");
    $(".carosal-button-hover").css("color","transparent"); 
    $(".carosal-button-hover").css({opacity:0});
});


$(".carosal-button-hover").on("mouseover",function(){
    $(".carosal-button-hover").css("backgroundColor", "#f1f3f5");
    $(".carosal-button-hover").css("color", "#000");
    $(".carosal-button-hover").css({opacity:1});
});


// Status hover function
$(".C-p").on("mouseover",function(){
    $(".S-p").css('transform','scale(1.01)');
    $(".plus-logo").css("backgroundColor", " #e4e6eb");
    
    
});

$(".C-p").on("mouseleave",function(){
    $(".S-p").css('transform','scale(1.0)');
    $(".plus-logo").css("backgroundColor", " #fff");
  
});

$(".plus-logo").on("mouseover",function(){
    $(".plus-logo").css("backgroundColor", " #e4e6eb");
    
    
});

$(".S-p").on("mouseover",function(){
    $(".plus-logo").css("backgroundColor", " #e4e6eb");
    
    
});

$(".S-p").on("mouseleave",function(){
    $(".plus-logo").css("backgroundColor", " #fff");
   
});

$(".S-p").on("mouseover",function(){
    $(".S-p").css('transform','scale(1.01)');
   
});

$(".S-p").on("mouseleave",function(){
    $(".S-p").css('transform','scale(1.0)');
   
});

// Change To Lite To Mode 






