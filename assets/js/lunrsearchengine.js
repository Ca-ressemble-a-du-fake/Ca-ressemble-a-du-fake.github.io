
var documents = [{
    "id": 0,
    "url": "/about",
    "title": "À propos",
    "body": "Che(è)r(e) Visiteur(euse), ce site partage les expériences de la vie quotidienne de l'auteur. Tous les articles postés peuvent apparaître comme des fausses informations au premier abord, mais tout est pourtant vrai! Tous ces articles ne proviennent pas de nulle part, mais ont été soigneusement testés, vérifiés, voire même auto-expérimentés (ici on sait mouiller la chemise pour nos lecteurs). En dernier lieu, ce site est garanti sans contenu pornographique ou violent, pour la simple raison que mes enfants pourraient un jour y tomber dessus 😉! Où est hébergé ce site, mes données personnelles sont elles utilisées ?: Ce site hébérgé en France n'utilise ni l'infrastructure de Google pour générer des statistiques de visites, ni celle de Facebook et autres pour vous pister. Il n'y a donc (normalement) pas de pisteurs éléctroniques qui vous suivent sur ce site. Des cryptos pour nous soutenir!Actuellement ce blog comporte des encarts publicitaires gérés par Google. Mais l'objectif final est de financer ce site uniquement grâce à vos dons en monnaies virtuelles (bitcoins, ethereum, ravencoins). Faites vos dons! Plus d'info"
    }, {
    "id": 1,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "/donate",
    "title": "À vot' bon coeur !",
    "body": "Vous pouvez soutenir CARADUF grâce à vos dons en crypto-monnaies.  À quoi sevent vos dons ?: Vos dons servent à maintenir la lumière allumée (🌎 🌿 seulement pendant les heures de travail 🌿 🌎), à payer les serveurs, le site et sa maintenance, à faire évoluer le matériel utilisé . . . pour vous fournir du contenu toujours agréable à lire et pertinent. Et aussi vos dons permettent de quitter le bénévolat pour passer professionnel (cf  vivre  de sa passion de l'écriture).  Pourquoi utiliser des crypto-monnaies ?: Les donateurs de ce site veulent rester anonymes mais veulent aussi que CARADUF perdure sans recourir au soutien publicitaire. Pour que CARADUF perdure avec la même liberté éditoriale, mon identitée ne doit pas percer (si vous la découvrez, il faudra garder le secret pour vous 🤫). Les cryptos garantissent cet anonymat bi-directionnel.  Comment effectuer le don en crypto ?Choisissez la crypto que vous voulez donner, puis cliquez dans la zone floutée pour révéler l'adresse correspondante. Copiez alors cette adresse et collez la dans le logiciel ou le site qui gère votre porte-monnaie virtuel ( crypto wallet ). 💸 Attention les transactions en crypto sont irréversibles, donc faites bien attention au montant saisi avant de valider 💸 ! Ξ Ethereum Ξ 	0x102BA9C329a890C34204596DaD1293e06f853540 📋 🐶 Shiba Inu 🐶 	0xDf31f3f0d1084D9f736b6b4C16b86931cb5cE86B 📋 ₿ Bitcoin ₿ 	3FMsALc6GGDuhtCyuP8gPvdy2FJsotGGjV 📋 "
    }, {
    "id": 3,
    "url": "/",
    "title": "Blog",
    "body": "{% if page. url == “/” %}       À la une:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       Tous les articles:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/enfilage-sangle-pieds/",
    "title": "Comment utiliser la sangle de pieds de l'élastique de nage ?",
    "body": "2021/09/01 - Alors vous possédez une piscine chez vous et vous avez envie d’y nager en continu efficacement, sans avoir à percuter la paroi tous les 2 mouvements de brasse / crawl / dos / papillon ? La ceinture de nage est donc faite pour vous. Quand utiliser la sangle de pieds ?: Si pour nager la brasse peinarde la sangle ventrale convient, pour s’entrainer sur les autres nages, la sangle de pieds s’impmose vite. En effet, la ceinture ventrale a tendance à tirer le bassin vers le haut et l’arrière ce qui a pour conséquence d’incliner le corps et de faire tomber les jambes. Certains sont génés par cette position inclinée lorsqu’ils nagent le crawl, la dos ou le papillon. C’est pourquoi pour ces nages là, passser la sangle au niveau des pieds est recommandé. Comment bien mettre la sangle de pieds ?: Donc maintenant qu’il est clair que vous voulez mettre la sangle au niveau des pieds, reste à savoir comment la mettre : au niveau des chevilles, sur le devant, le milieu, le talon du pied ? Et comment faire pour qu’elle ne se détende pas pendant la nage ? C’est ce que nous allons détailler tout de suite. Un mode d’emploi sur les étiquettes ?Des pictogrames placés sur les sangles de pieds montrent comment les enfiler. Mais ce n’est pas toujours simple de les comprendre. Idée généraleL’idée générale à avoir en tête est que la partie de la sangle qui est reliée vers le point fixe doit partir de la voute plantaire. Les fermetures à clips doivent elles être placées vers l’extérieur du pied pour éviter que lors du battement de crawl ou de dos, les lanières s’entrechoquent et se détendent.  En pratique !Une fois qu’on a compris ça, il suffit de :    Déposer les deux cercles en mousse avec les “cordelettes” vers l’avant, et les lanières des clips vers l’intérieur.      Si les lanières des clips sont à l’extérieur, elles se détendront pendant la nage à cause des chocs lors des battements ou de l’ondulation. Dans ce cas il faut les intervertir.        Ça offre alors deux cercles dans lesquels on va simplement poser nos talons dedans.        Et c’est tout! On ferme les clips, on attache la sangle au point fixe et on nage!     Si lors de cette étape les clips se retrouvent à l’intérieur, c’est que les cercles de mousse ont été intervertis à l’étape 1.     Conclusion: En résumé, cette ceinture de nage est très pratique pour nager sans s’arrêter dans une petite piscine privée. Cependant pour nager dans toutes les nages, il vaut mieux utiliser la sangle de pieds qui autorise tous les mouvements et reste bien confortablement attachée quand elle est bien mise ! Et voilà, maitenant, il ne vous reste plus qu’à enchainer les longueurs (virtuellement) ! Bon entrainement 🏊! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});