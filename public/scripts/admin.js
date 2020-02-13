$(document).ready(function(){
    const  reloadForm = document.tableForm;
    $('table').on('click', '.btn', function(){
        //alert('You Clicked Me Bro');
        var rowEl = $(this).closest('tr');
        var email =  rowEl.find('.email').text();
        $.ajax({
            method : 'DELETE',
            url : '/admin/delete/' + email,
            success : function(deleted){
               console.log('Successfuly deleted');
            },
            failure : function(){
                console.log('error has occured');
            }
        });
       document.location.href = '/admin/admin';
    });
});