$(document).ready(function () {




    $(".sortablecontainer").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        // placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });


    $(".container").sortable({
        connectWith: ".container",
        tolerance: 'pointer',
        revert: 'invalid',
        // placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });



    //-------------AJOUT---------------//
    $('#AjoutContainer').click(function () {
        $('<div class="container">Container Base.<div id="remove" class="btn"><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div></div></div>').insertBefore("#AjoutContainer");

        // alert("Add bouton was clicked.");

    });

/*    $('#AjoutModul').click(function () {
        $('<div class="row"> <div id="modultext" class="col-md-12">module TextAdd <div id="AjoutModul" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div>').insertAfter();

        // alert("Add bouton was clicked.");

    });*/

    $(document).on('click', '#AjoutModul', function () {
        var modul = $(this).parent();
        $('<div class="row"> <div id="modultext" class="col-md-12">module TextAdd <div id="AjoutModul" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div>').insertAfter(modul);



    });






    //---------------SUPPRESSION----------------//
    $(document).on('click', '#remove', function () {
        $(this).closest('.container').remove();
    });

    $(document).on('click', '#removemodul', function () {
        $(this).closest('.row').remove();
    });




    //----------------AJOUT COLUMN-------------------//
    $(document).on('click', '#addColumn', function () {
        $(this).closest('.row').removeClass();
        $(this).closest('.row').addClass('col-md-6');
    });


});
