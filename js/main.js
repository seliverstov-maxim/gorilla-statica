getFormData = function(form) {
  var unindexed_array = form.serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function(n, i){
      indexed_array[n['name']] = n['value'];
  });

  return indexed_array;
}

$(document).ready(function(){
  $('input[type="tel"]').inputmask({"mask": "+7(999) 999 99-99"});
});