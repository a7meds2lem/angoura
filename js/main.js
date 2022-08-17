let aboutOffset=$('#about').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop()>aboutOffset){
        $('.navbar').css({'backgroundColor':'#09c','transition':'2s'})
    }
    else{
        $('.navbar').css({'backgroundColor':'transparent','transition':'2s'})
    }
})
$('.topBtn').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})
//       nav-links smoothing
$('.nav-link').click(function(){
    let currentHref=$(this).attr('href');
    let currentOffset=$(currentHref).offset().top;
    $('body.html').animate({scrollTop:currentOffset},2000)
})
//        active link
$('#home a').click(function(){
    $(this).css('color','#F25454')
    $(this).siblings().css('color','#fff')
})
//    loading screen
$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible')
    })
})


//   contact

var inputName = document.getElementById("inputName");
var inputAge = document.getElementById("inputAge");
var inputPhone = document.getElementById("inputPhone");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var inputRePassword = document.getElementById("inputRePassword");

var container = [];

function submitData() {
    if (inputNameValidate() == true) {
        personalData = {
            name: inputName.value,
            age: inputAge.value,
            phone: inputPhone.value,
            email: inputEmail.value,
            password: inputPassword.value,
            rePassword: inputRePassword.value,
        };
        container.push(personalData);
        localStorage.setItem("personalData", JSON.stringify(container));
        reset();
    } else {
        alert("enter a correct data");
    }
}

