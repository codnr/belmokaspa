$(document).on('ready', function(){
    $("#contact_form").submit(function(e){
        e.preventDefault();
        //$("#loader").html("Please wait..");
        FormName=$('#name').val().text();
        FormEmail=$('#email').val().text();
        FormMessage=$('#message').val().text();
        FormData = "FormName="+FormName&"FormEmail="+FormEmail&"FormMessage="+FormMessage;

        $.ajax({
            url: "http://69.113.201.38:9443/",
            type: "POST",
            crossDomain: true,
            data : FormData,
            success: function(html){
                alert("Your information is successfully Submitted.");
            },
            complete: function (data) {
                //$("#loader").html("Your information is successfully Submitted.");
                //$("#contact_form").reset();
            }
        });
    });
});

$(window).on('load', function(){
    $('.preloader').fadeOut(1500,"swing");
 });