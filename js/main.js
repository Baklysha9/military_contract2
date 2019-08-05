
$('.first li').click(function() {
   let id = $(this)[0].id; 
   console.log(id);
   $('#photo').prop('src', './img/'+id+'.jpg');
   $('#photo').focus();
});