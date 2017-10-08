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
        $('<div class="container">Container Base 2.<div id="addColumn" class="btn"><span class="glyphicon glyphicon-triangle-left"></span></div><div id="delColumn" class="btn"><span class="glyphicon glyphicon-triangle-right"></span></div> <div id="remove" class="btn"><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div></div><div class="row"> <div id="modultext" class=" col-md-12"> module Text1 <div id="AjoutModul" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i></div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div></div> </div></div>').insertBefore("#AjoutContainer");

        // alert("Add bouton was clicked.");

    });

    /*    $('#AjoutModul').click(function () {
            $('<div class="row"> <div id="modultext" class="col-md-12">module TextAdd <div id="AjoutModul" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div>').insertAfter();

            // alert("Add bouton was clicked.");

        });*/

    $(document).on('click', '#AjoutModul', function () {
        var modul = $(this).closest('.row');
        $('<div class="row"> <div id="modultext" class="col-md-12">module TextAdd <input type="text" class="form-control" id="usr"><div id="AjoutModul" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div>').insertAfter(modul);



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

    $(document).on('click', '#delColumn', function () {
        $(this).closest('.row').removeClass();
        $(this).closest('.row').addClass('col-md-12');
    });

});


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}