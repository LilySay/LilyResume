$(function(){
/*返回顶部*/

      // $(function(){
      //   $(".Back_top").hide();
      //   $(window).scroll(function(){
      //     if($(this).scrollTop() !=0){
      //       $(".Back_top").fadeIn(),3000;
      //     }else{
      //       $(".Back_top").fadeOut(),3000;
      //     }
      //   });
      // })


      
      $(window).scroll(function(){
          if($(window).scrollTop()>200){
              $(".Back_top").fadeIn();
          }else{
            $(".Back_top").fadeOut();
          }
        })
      $(".Back_top").click(function(){
        $(window).scrollTop(0);
        $(this).fadeOut(); 
        })


})