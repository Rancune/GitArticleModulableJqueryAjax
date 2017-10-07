$(document).ready(function () {

/*    jQuery(function ($) {



        var movCont = $('.container');

        movCont.sortable({

            update: function () {
                $('.container', movCont).each(function (index, elem) {
                    var $listItem = $(elem),
                        newIndex = $listItem.index();

                    // Persist the new indices.
                });
            }
        });



    });*/


    $(".sortablecontainer").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });
    
    
    $(".container").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });
    

    $('#AjoutContainer').click(function () {
        $('<div class="container">Container Base.<div id="remove" class="btn"><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div></div></div>').insertBefore("#AjoutContainer");

        // alert("Add bouton was clicked.");

    });




    $(document).on('click', '#remove', function () {
        $(this).closest('.container').remove();


    });

});





