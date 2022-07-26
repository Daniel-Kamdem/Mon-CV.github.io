$(document).ready(function () {

    $('a.cv').click(function () {
        $("#includedContent").load("/public/articles/" + $(this).attr("id") + ".html");
        $('ul.tree').hide(600);
        $("a[id='" + $(this).attr("id") + "']").parent().parent().toggle(600);
        window.scrollTo(0, 0);
        $('#updated').text(fetchHeader("/assets/articles/" + $(this).attr("id") + ".html",'Last-Modified'));
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