/*
$(document).on('ready', function(){
    $("#contact_form").submit(function(e){
        e.preventDefault();
        //$("#loader").html("Please wait..");
        SanatizedForm = $("contact_form").serializeArray(); 
        FormName=SanatizedForm['name'];
        FormEmail=SanatizedForm['email'];
        FormMessage=SanatizedForm['message'];
        FormData = "FormName="+FormName&"FormEmail="+FormEmail&"FormMessage="+FormMessage;

        $.ajax({
            url: "http://69.113.201.38:9443/post?Type=email&Target=belmokaspa&"+FormData,
            type: "GET",
            cache: false,
            crossDomain: true,
            dataType: 'jsonp',
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
*/

$(window).on('load', function(){
    $('.preloader').fadeOut(1500,"swing");
 });

// Thanks for blocking the post requests gitpages...
/*
$(document).on('ready', function(){
    $("#contact_form").submit(function(e){
        e.preventDefault();
        //$("#loader").html("Please wait..");
        SanatizedForm = $("contact_form").serializeArray(); 
        FormName=SanatizedForm['name'];
        FormEmail=SanatizedForm['email'];
        FormMessage=SanatizedForm['message'];
        FormData = "FormName="+FormName&"FormEmail="+FormEmail&"FormMessage="+FormMessage;

        $.ajax({
            url: "http://69.113.201.38:9443/",
            type: "POST",
            crossDomain: true,
            headers: {
                'type':'email',
                'target':'belmokaspa'
            },
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
*/