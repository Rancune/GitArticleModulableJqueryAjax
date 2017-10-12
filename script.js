$(document).ready(function () {




    $(".sortablecontainer").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });


    $(".container").sortable({
        connectWith: ".container",
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });



    //-------------AJOUT CONTAINER---------------//
    $('#AjoutContainer').click(function () {
        $('<div class="container">Container Base 2.<div id="addColumn" class="btn"><span class="glyphicon glyphicon-triangle-left"></span></div><div id="delColumn" class="btn"><span class="glyphicon glyphicon-triangle-right"></span></div> <div id="remove" class="btn"><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div></div><div class="row"> <div id="modultext" class="col-md-12">module TextAdd <input type="text" class="form-control" id="usr"><div id="AjoutModulText" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div></div>').insertBefore("#AjoutContainer");



    });

    /*    $('#AjoutModul').click(function () {
            $('<div class="row"> <div id="modultext" class="col-md-12">module TextAdd <div id="AjoutModul" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div>').insertAfter();

            // alert("Add bouton was clicked.");

        });*/


    //-------------AJOUT MODUL TEXT---------------//
    //TODO : compter et incrémenter les id des modules pour sauvegarder la configuration de l'article 
    $(document).on('click', '#AjoutModulText', function () {
        var modul = $(this).closest('.row');
        $('<div class="row"> <div id="modultext" class="col-md-12">module TextAdd <input type="text" class="form-control" id="usr"><div id="AjoutModulText" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i> </div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div> </div> </div>').insertAfter(modul);

    });



    //-------------AJOUT MODUL VIDEO---------------//
    $(document).on('click', '#AjoutModulVideo', function () {
        var modul = $(this).closest('.row');
        $('<div class="row"><div id="modultext" class=" col-sm-12"><labe>module Image1</labe><form method="POST" action="upload.php" enctype="multipart/form-data"><input type="hidden" name="MAX_FILE_SIZE" value="100000"> Fichier : <input type="file" name="avatar"></form><div id="AjoutModulVideo" class="btn"><i class="fa fa-plus-square" aria-hidden="true"></i></div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i></div></div></div>').insertAfter(modul);

    });




    //---------------SUPPRESSION CONTAINER----------------//
    $(document).on('click', '#remove', function () {
        $(this).closest('.container').remove();
    });

    $(document).on('click', '#removemodul', function () {
        $(this).closest('.row').remove();
    });




    //----------------AJOUT COLUMN-------------------//
    // On ajout des column avec les fleches gauche droite en haut de container 
    //TODO: utiliser IF pour changer la class : col-md-3 en col-md-6 puis en col-md-12 et inversement à chaque clic sur une fleche
    $(document).on('click', '#addColumn', function () {
        $(this).closest('.row').removeClass();
        $(this).closest('.row').addClass('col-md-6');
    });

    $(document).on('click', '#delColumn', function () {
        $(this).closest('.row').removeClass();
        $(this).closest('.row').addClass('col-md-12');
    });





    //----------------AFFICHAGE DE L'IMAGE SELECTIONNEE--------//
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imageselection1')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }


    //----------------GOOGLE MAPS-------------------//
    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.12),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }



    //----------------ARTICLE SAVEtoDB-------------------//



    $(document).on('click', '#save', function (e) {
        function articleSend() {
            var data = $("#article_add").serialize();
            $.ajax({
                type: "POST",
                url: "ajoutarticle.php",
                data: form,

                success: function (data) {
                    alert("L'article a été sauvegardé.");
                    window.location.reload(true);

                }
            });

        }
    });









});
