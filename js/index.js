// console.log("your index.js fileis loadwd correctly!");
// $( "#target" ).on( "click", function() {
//     alert( "Handler for `click` called." );
//   } );
//   $( "td" ).hover(
//     function() {
//       $( this ).addClass( "hover" );
//     }, function() {
//       $( this ).removeClass( "hover" );
//     }
//   );
// $("#myID").on("click", function(){
//     console.log("you cliked on #myID");  
// });
// $("#myID").on("click", function(){
//     $(".fadeMe").fadeToggle("slow");
// });
$(".p").hover(
    function(){
        $(this).addClass("change")
    },
    function(){
        $( this ).removeClass("change");
    }
) 
$(".Donate").hover(
    function(){
        $(this).addClass("Donate-colore")
    },
    function(){
        $(this).removeClass("Donate-colore");
})
console.log("###")
