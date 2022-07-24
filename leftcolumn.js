$(document).ready(function () {
    $('ul.tree').hide();

    $('a.menu').click(function () {
        $("#includedContent").load("image/" + $(this).attr("id") + ".html");
        window.scrollTo(0, 0);
        $('#updated').text(fetchHeader("/assets/articles/" + $(this).attr("id") + ".html",'Last-Modified'));
    });

    $('a.home').click(function() {
        $('ul.tree').hide(600);
        $("#includedContent").load("/assets/articles/cv.html");
        $('a.expand').html($.parseHTML('<img src="image/IMG-4585 copie.jpg" height="42" width="42"><label class="tree-toggler">Faites votre choix ou Cliquez ici pour tout déplier</label>'));
        window.scrollTo(0, 0);
        $('#updated').text(fetchHeader("/assets/articles/cv.html",'Last-Modified'));
    });

    $('a.expand').click(function() {
        if ($(this).children("img").attr("src") == "image/IMG-4585 copie.jpg"){
            $('ul.tree').hide(60);
            $(this).html($.parseHTML('<img src="image/IMG-4584 copie.jpg" height="42" width="42"><label class="tree-toggler">Repliez tout</label>'));
        }
        else {
            $(this).html($.parseHTML('<img src="image/IMG-4585 copie.jpg" height="42" width="42"><label class="tree-toggler">Faites votre choix ou Cliquez ici pour tout déplier</label>'));
        }
        $('ul.tree').toggle(600);
        window.scrollTo(0, 0);
    });

    $('label.tree-toggler').click(function () {
        if ($(this).parent().children('ul.tree').is(":hidden")) {
            $('ul.tree').hide(600);
            $(this).parent().children('ul.tree').toggle(600);
        }
        else {
            $('ul.tree').hide(600);
        }
    });

    function fetchHeader(url, wch) {
            try {
                var req=new XMLHttpRequest();
                req.open("HEAD", url, false);
                req.send(null);
                if(req.status== 200){
                    var derniereModif= req.getResponseHeader(wch);
                    var dateModif = new Date(derniereModif);
                    var jour = dateModif.getDate();
                    var mois = dateModif.getMonth() + 1;
                    var annee = dateModif.getYear() + 1900;
                    return "Dernière modification de la page le " + jour + "/" + mois + "/" + annee;
                }
                else return false;
            } catch(er) {
                return er.message;
            }
        }
});
