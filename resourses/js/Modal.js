var modal = document.getElementById("myModal");
var mainBody = document.getElementById("main-body");
// Get the button that opens the modal
var Modal_Presentation= document.getElementById("Modal_Presentation");
var Modal_Sensivity = document.getElementById("Modal_Sensivity");
var Modal_Equation = document.getElementById("Modal_Equation");
var Modal_Bifdiagram = document.getElementById("Modal_Bifdiagram");
var Modal_Attractor = document.getElementById("Modal_Attractor");
// Get the <span> element that closes the modal

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      closeModal(modal);
    }
  }
  
  // When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
    removeRow(modal);
    }
    
function removeRow(input) {
    input.innerHTML='';
    }

// When the user clicks the button, open the modal 
Modal_Presentation.onclick = function() {
  const div = document.createElement('div');
  div.className = 'row';
  div.innerHTML=`
  <div class="modal-content">

  <div class="modal-header">
    <span onclick = "closeModal()" class="close">&times;</span>
    <div class="data-title">Lorentz Wheel</div>
  </div>

  <div class="modal-body">

    <div class="container-flex-column">
      <div class="modal-paragraph">
        <h1>Introduction</h1>
        <div class="content" >
          <p>Bienvenue sur un simulateur de roue de Lorentz. Le but de cette page web est de permettre de faire ses premiers pas dans la comprehention des phenomenes chaotiques et en comprendre les principes generaux.
          Il s'agit d'un model physique, qui bien que simpliste, vous permettra d'explorer certaines notion <span>comme la sensibilite aux conditiions initiales</span> ou encore comprendre ce qu'est un <span>attracteur de lorentz</span>.
          </p>
        </div>
      </div>
      <div class="modal-paragraph">
        <h2>Description du systeme</h2>
        <div class="content container-flex-colomn" >
          <div class="content">
            <p>Une roue à aubes lorenzienne (ou « chaotique ») est un modèle physique qui correspond parfaitement aux équations de Lorenz. 
            Une roue à aubes chaotique est comme une roue à aubes normale, sauf pour le fait que ses seaux fuient.<span> L’eau se déverse dans le seau supérieur à un rythme régulier 
            et donne de l’énergie au système tandis que l’eau s’échappe de chaque seau à un rythme régulier et élimine l’énergie du système.</span>
            <span>Si les paramètres de la roue sont réglés correctement,</span> la roue présentera un mouvement chaotique: plutôt que de tourner dans une direction à une vitesse constante, 
            la roue accélérera, ralentira, s’arrêtera, changera de direction et oscillera 
            entre les combinaisons de comportements <span>de manière imprévisible.</span> </p>
        </div>
          <div class="content container-modal-img-large container-center-img">
            <img src="resourses/images/Intro_description.jpg">
          </div>
          <div class="content">
          <p>Au temps <span>T0 nous presentons un debit Q sur le dessus de la roue</span>. Ce debit restera constant durant toute la simulation. La roue ayant un lege angle l'aube qui commence a ce remplir 
          va creer un moment et engendrer une variation d'angle. <span>Au temps T1, W1 devient positif et la roue est en rotation</span>. Sur les temps suivants chaque aubes va suivre sa propre variation de 
          masse en fonction du debit d'entree et de la taille du trou. Nous rentrerons plus en details dans la section simulation.</p>
      </div>
        </div>

      </div>

      <div class="modal-paragraph">
        <h2>Outils d'etudes</h2>
        <div class="content" >
            <p>Au dela de la simulation du systeme plusieurs graphiques premettrons l'analyse des donnees. Cette analyse se base principalement sur 2 types de graphiques: 
            <span>Les attracteurs et les diagrames de bifurcation.</span> Un troisieme graphique permettra un suivi simple des valeurs de la vitesse de rotation pour chaques roues. </p>
        </div>
        <div class="container-flex" >

        <div class="container-inline-two container-padding" >
        <h2>Attracteur</h2>
            <p>L’ attracteur de Lorenz est une structure fractale correspondant au comportement à long terme de l'oscillateur de Lorenz. 
            L' attracteur montre comment les différentes variables du système dynamique évoluent dans le temps en une trajectoire non périodique.</p>
            <div class="container-center-img">
              <img src="resourses/images/Lorenz_Attractor.gif">
            </div>
        </div>

        <div class="container-inline-two container-padding" >
        <h2>Bifurcation diagram</h2>
          <p>En mathématiques, et en particulier dans l'étude des systèmes dynamiques, un diagramme de 
          bifurcation illustre les valeurs visitées asymptotiquement (points fixes, points périodiques,
             attracteurs chaotiques) par un système en fonction d'un paramètre</p>
            <div class="container-center-img">
            <img src="resourses/images/bifricationvideo.gif">
            </div>
        </div>




        </div>

      </div>
    </div>

    </div>


  <div class="modal-footer">

    <h3>Modal Footer</h3>

  </div>

</div>
 
`;
modal.appendChild(div);
modal.style.display = "block";
span = document.getElementsByClassName("close")[0];

if(mainBody.offsetHeight<1252){
  modal.style.height = '1260px';
}else{
  modal.style.height = mainBody.offsetHeight+'px';
}

}
Modal_Sensivity.onclick = function() {
    const div = document.createElement('div');
    div.className = 'row';
    div.innerHTML=`
    <div class="modal-content">
  <div class="modal-header">
    <span onclick = "closeModal()" class="close">&times;</span>
    <div class="data-title">Definition des conditions initiales</div>
  </div>

  <div class="modal-body">
    <div class="container-flex-column">
      <div class="modal-paragraph">
        <h2>Initialisation</h2>
        <div class="content" >

          <p>Un des critaire de definiton du chaos est la sensibilite aux conditions initales. Sur cette section vous pouvez faire varier les differents parametre d'entree du model.
          Il existe <span>4 parametres principaux </span>qui sont necessaire a l'initialisation du systeme: <span>Debit d'entree, Diametre des trou dans les cruches, l'angle a l'origine et le diametre de la roue.</span>
          Chacun de ces parametre a une plage d'utilisation dedie avec des valeurs min et max predefinie. 
          <br>
          Le dernier parametre est celui de l'erreur de mesure, 
          c'est un parametre special liee au decouverte de Lorentz sur le chaos il permet de vraiment se rendre compte de la sensibilite aux condition initiale. 
          En faisant varier la position initale 1,72×10-4 degre on arrive a un resultat completement different au bout de quelques iterations.
          <br>
            Voici le details de diffrents parametre et leur valeurs:
          </p>

            <div class="content container-flex" >
              
              <div class="container-inline-two-third container-text-centered">
                <ul>
                    <li><span class="init-condition-span" style="color:rgb(42, 42, 173);">Q : Debit d'entree (L/Minute)</span> | min:0.05 - max:0.15 - step:0.01 </li>
                    <li><span class="init-condition-span" style="color:rgb(60, 160, 35);">S : Diametre du trou (mm) </span>| min: 1mm - max: 3 mm- step: 10µm </li>
                    <li><span class="init-condition-span" style="color:rgb(173, 42, 42);">α : angle a l'origine (rad) </span>| min: -0.1 rad - max: 0.1 rad - step: 0.1rad (0.1 rad = 5,73 deg) </li>
                    <li><span class="init-condition-span" style="color:rgb(208, 211, 34);">R : Diametre de la roue (m) </span>| min: 0.7m - max: 1m - step:0.01m </li>
                    <li><span class="init-condition-span" style="color:rgb(49, 49, 61);">erreur : % d'erreur initale </span>| min:0.01% - max:1% - step:0.01 </li> 
                    <li>* le % d'erreur n'est applique que sur l'angle a l'origine</li>             
                </ul>
              </div>

              <div class="container-inline-third container-modal-img">
                <img src="resourses/images/flatWheel.png">
              </div>

            </div>

        </div>
     </div>

     <div class="modal-paragraph">
      <h2>Lancement des simulations</h2>
      <div class="content" >
        <p>Pour le lancement de la simulation il suffit de definir les parametres et cliquer sur RUN.
        <span>On ne peux lancer q'une simulation a la fois</span>. Si vous voulez relancer la simulation il suffira de cliquer sur Restart Model. </p>
      </div>
     </div>

    </div>
  </div>

  <div class="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>
  `;
  modal.appendChild(div);
  modal.style.display = "block";
  span = document.getElementsByClassName("close")[0];
  modal.style.height = mainBody.offsetHeight+'px';
}
Modal_Equation.onclick = function() {
  const div = document.createElement('div');
  div.className = 'row';
  div.innerHTML=`
  <div class="modal-content">
  <div class="modal-header">
    <span onclick = "closeModal()" class="close">&times;</span>
    <div class="data-title">Model Definition</div>
  </div>
  <div class="modal-body">
  <div class="modal-paragraph">
      <h2>Introduction</h2>
      <div class="content" >
        <p>La roue de Lorentz a ete imagine afin de prendre pour exemple un systeme physique et montrer que la theorie developpee autour des models de Lorentz pour la meteo
        s'appliques toujours. La roue hydrolique est un dispositif elementaire qui peut avoir des comportements etonnament compliques.<span> Il s'agit d'un systeme dissipatif d'energie
        alimente en continue en energie.</span> L'energie est l'eau que l'on fait rentrer dans le systeme et les pertes se font par frottement et lorsques les seaux se vident.
        <span>Le comportement a long terme du systeme depend de l'intensite de l'energie fournie et de sa facon de la dissiper.</span></p>
      </div>
  </div>
  <div class="modal-paragraph">
        <h2>Description</h2>
        <div class="content" >

        <p>Voici une representation schematique du systeme. Nous allons retrouver le <span>Debit d'entre Q</span>, les sections <span>S et s</span> des seaux, la masse de chaques seaux est representee par une <span>masse mi</span>.
        <span>r </span>represente le diametre de la roue. <span>l'angle θ</span> represente l'angle a l'origine. Chaques seaux aura aussi son θi.
        </p> 
        <br>

          <div class="content container-flex"  >
           <div class="container-modal-img-half margin-center">
              <img src="resourses/images/flatWheel_Param.png">
           </div>
          </div>

          <p>Comme nous allons le voir plus tard <span>cet angle θ ne rentre pas dans les equations et n'influe pas sur la dynamique du systeme</span>. C'est pour cela que le % d'erreur
          ne s'applique que sur cet angle. Comme on peut le voir <span>une simple variation en ‰ de cet angle</span> peut induire un comportement completement different du systeme <span>bien qu'il n'entre pas dans 
          le calculs des variations de ce systeme</span>.</p>
  </div>

  <div class="modal-paragraph">
        <h2>Construction du model</h2>
        <div class="content" >
            <p>Au dela de la simulation du systeme plusieurs graphiques premettrons l'analyse des donnees. Cette analyse se base principalement sur 2 types de graphiques: 
            Les attracteurs et les diagrames de bifurcation. Un troisieme graphique permettra un suivi simple des valeurs de la vitesse de rotation pour chaques roues. </p>
        </div>
        <div class="container-flex" >

          <div class="container-inline-two container-padding" >
          <h2>Variation de masse</h2>
              
              <div class="container-center-img container-modal-img-small">
                <img src="resourses/images/masse_var.png">
              </div>
              <div class="container-calcul">
                <ul>
                  <li>Calcul de la Vitesse de sortie (Torricelli):</li>
                  <li><img src="resourses/images/mass_cal1.png"> </li>
                  <li>Expression du debit de sortie en fonction de la masse</li>
                  <li><img src="resourses/images/mass_cal2.png"></li>
                  <li><img style="height:80px" src="resourses/images/mass_cal3.png"> </li>
                  <li>Expression de la Variation masse: Debit d'entre sous condition moins le debit de sortie</li>
                  <li><img src="resourses/images/mass_cal4.png"></li>
                  <li>On en deduit l'expression</li>
                  <li class="result"><img src="resourses/images/mass_cal5.png"></li> 
                  <li></li>             
                </ul>
               <p>On en deduit que la masse pour chaque aube depend au <span>temps T(N+1) depend du contenue en masse au temps T(N)</span>, d'un facteur A avec <img style="height:50px" src="resourses/images/mass_cal6.png"> 
               et du fait qu'elle soit ou non alimentee en eau par le debit d'entree (depend d'un angle: atan(Rayon Aube/Rayon roue)). 
               <br> 
               <span>Bien que tres simple</span> cette formule liee a la variation de vitesse angulaire qu'elle induit <span>suffit a engendrer un mouvement chaotiques</span></p>
              </div>
          </div>

          <div class="container-inline-two container-padding" >
          <h2>Variation de vitesse angulaire</h2>
            
              <div class="container-center-img container-modal-img-small">
              <img src="resourses/images/angle_var.png">
              </div>
              <div class="container-calcul">
                <ul>
                  <li>Expression du couple par masse unitaire</li>
                  <li><img src="resourses/images/ang_cal1.png"> </li>
                  <li>Expression du moment d'inertie par masse unitaire</li>
                  <li><img src="resourses/images/ang_cal2.png"></li>
                  <li>Expression des resultantes globales de toutes les masses</li>
                  <li><img style="height:80px" src="resourses/images/ang_cal3.png"> </li>
                  <li><img style="height:80px" src="resourses/images/ang_cal4.png"></li>
                  <li>Expression de la variation de vitesse angulaire</li>
                  <li><img src="resourses/images/ang_cal5.png"></li> 
                  <li class="result"><img src="resourses/images/ang_cal6.png"></li>
                  <li></li>             
                </ul>
               <p>On en deduit que la varaition de vitesse angulaire depend au <span>temps T(N+1) depend de la sommes des bras de leviers au temps T(N)</span>, 
                et d'un coefficient de frottement f. Le signe negatif correspond au fait que la roue dissipe d'energie par frottement.
               <br> 
              </div>
          </div>

  </div>
  <div class="modal-paragraph">
  <h2>Limitations</h2>
  <div class="content" >
    <p>Le model decrit plus haut ne prends pas en compte toute la physique du systeme: 
    <br>
    1) Par exemple les mouvements propres des seaux ne sont pas pris en compte. Afin de garder une orientation
    toujours verticale ils devraient permettre un moment propre avec la meme orientation que la roue. La dynamique de ces moments n'est pas non plus pris en compte. Ils devraient induire des variations
    de la position du centre de gravite des seaux qui ne serait alors plus reduit a des masses ponctuelles. 
    <br>
    2) La force exercee par le jet d'eau n'est pas pris en compte non plus. 
    L'application de la formule de Torricelli suppose une variation de niveau infiniement lente avec h>>r et un ecoulement laminaire. l'arrivee d'un jet de plusieurs L/minute dans le seau
    va induire une turbulance qui va modifier la variation de masse. 
    3) ..etc
    <br>
    Malgres tout ces simplification permettent de garder les ordres de grandeurs au premiers ordre et permettent de decrire une approximation du systeme. Cela permet surtout de se rendre compte
    du comportement chaotique induit par systeme decrit par 2 equations simple.
      </p>
  </div>
</div>

  <div class="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>
`;
modal.appendChild(div);
modal.style.display = "block";
span = document.getElementsByClassName("close")[0];
modal.style.height = mainBody.offsetHeight+'px';
}
Modal_Bifdiagram .onclick = function() {
  const div = document.createElement('div');
  div.className = 'row';
  div.innerHTML=`
  <div class="modal-content">
  <div class="modal-header">
    <span onclick = "closeModal()" class="close">&times;</span>
    <div class="data-title">Bifurcation diagram</div>
  </div>
  <div class="modal-body">
  <div class="modal-paragraph">
        <h2>Introduction</h2>
        <div class="content" >
        <p>En mathématiques, en particulier dans les systèmes dynamiques, <span>un diagramme de bifurcation montre les valeurs visitées ou approchées asymptotiquement d’un système en fonction d’un paramètre de bifurcation dans le système. </span>
        Il est habituel de représenter les valeurs stables avec une ligne continue et les valeurs instables avec une ligne pointillée, 
        bien que souvent les points instables soient omis. Les diagrammes de bifurcation permettent de visualiser la théorie de la bifurcation.</p>
        </div>
    <div class="content" >
        <div class="container-center-img">
        <img src="resourses/images/bifricationvideo.gif">
        </div>
    </div>

    <p>Un diagramme de bifurcation est une représentation graphique qui montre comment le comportement d’un système non linéaire 
    change lorsqu’un paramètre particulier est modifié. Dans la théorie du chaos, les diagrammes de bifurcation sont couramment utilisés 
    pour analyser le comportement des systèmes chaotiques.</p>
   
    <p><span>Comme le paramètre est varié, le comportement du système peut subir des changements brusques, 
   connus sous le nom de bifurcations.</span> Ces bifurcations peuvent amener le système à présenter un comportement complexe et imprévisible, tel que le chaos. 
   Les diagrammes de bifurcation peuvent aider à identifier les types de bifurcations qu’un système subit lorsque le paramètre est modifié et comment le comportement 
   du système change en conséquence.</p>
   </div>

   <div class="modal-paragraph">

        <h2>Application</h2>
        <div class="content" >
        <p>Dans un diagramme de bifurcation, l’axe horizontal représente la <span>valeur du paramètre faisant varier et l’axe vertical représente le comportement du système.</span> 
        Le comportement du système est généralement représenté par un tracé d’une mesure de l’état du système, telle que sa position, sa vitesse ou sa phase.</p>
        <p>Ici nous allons donc explorer les differentes valeurs de vitesse angulaire sur la plage du parametre considere. <span>Prenons pour exemple la section de fuite. </span>
        Nous allons dans un premier temps lancer 1000 simulations en <span>faisant varier a chaques fois la valeur de la section de fuite uniquement </span>sur l'ensemble de sa plage de valeurs. 
        Et pour chaque simulation nous allons recuperer les extremum des 500 dernieres iterations et les regrouper sous la valeur du parametre utilise: </p>
        
        <div class="container-flex container-block">
         <div class="container-flex-colomn container-padding">
          <div class="container-center-img container-modal-img-large">
            <img src="resourses/images/bif_simu1.JPG">
            <p>Simulation avec un jeu de donnee fixe et un parametre section de fuite avec une <span>valeur de sec=0.0016</span> </p>
          </div>
         </div>

          <div class="container-flex-colomn container-padding">
            <div class="container-center-img container-modal-img-large">
              <img src="resourses/images/bif_simu2.JPG">
              <p>Simulation avec un jeu de donnee fixe et un parametre section de fuite avec une <span>valeur de sec=0.00160048 </span></p>
            </div>
          </div>
        </div>

        <p>Pour ce jeu de donnees nous voyons bien qu'une petite variation dans la valeur de la section de fuite a pour consequence un grand changement dans le comportement du systeme
        . Passant d'un regime pseudo-periodique a un regime stable</p>
        <p>Une fois toutes les donnee calculee nous les affichons dans un graphique unique qui represente le diagrame de bifurcation. Ce diagrame permet d'explorer une coupe de l'espace des phase
        pour une valeur d'un parametre. En fonction des resultats on peut donc voir les <span>differents mode du systeme: Stable, Chaotique, hors limite</span></p>
        
        <div class="container-flex-colomn container-block">
          <div class="container-flex-colomn container-padding">
          <div class="container-center-img container-modal-img-large">
            <img src="resourses/images/chaotic_Aera.JPG">
          </div>
          <p>Ici les <span>zones en jaune</span> represente des <span>plage de valeurs chaotiques</span> ou un petite variation vas entrainer de grand changement.
            Sur ce mode les 2 roues <span>ne vont pas avoir</span>le meme comportement.</p>
          </div>

          <div class="container-flex-colomn container-padding">
            <div class="container-center-img container-modal-img-large">
              <img src="resourses/images/other_Aera.JPG">
            </div>
            <p>Ici <span>en vert</span> le systeme est dans un <span>regime stable</span>, une petite variation n'entraine pas de grand changement dans le systeme. Sur ce mode les 2 roues <span>vont avoir</span> le meme comportement. 
            <span> En rouge</span> il est <span>hors limite</span>, la section de fuite est trop importante par rapport au debit et la roue ne tourne plus au bout de quelques secondes car les aubes sont vides</p>
          </div>
        </div>

        </div>


  </div>



  </div>
  <div class="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>
`;
modal.appendChild(div);
modal.style.display = "block";
span = document.getElementsByClassName("close")[0];
modal.style.height = mainBody.offsetHeight+'px';
}
Modal_Attractor.onclick = function() {
  const div = document.createElement('div');
  div.className = 'row';
  div.innerHTML=`

  <div class="modal-content">
  <div class="modal-header">
    <span onclick = "closeModal()" class="close">&times;</span>
    <div class="data-title">Attracteur de Lorentz</div>
  </div>
  <div class="modal-body">
  <div class="modal-paragraph">
        <h2>Introduction</h2>
        <div class="content" >
        <p><span>L’ attracteur de Lorenz</span> est une structure fractale correspondant au comportement à long terme de l'oscillateur de Lorenz.
        <span>L' attracteur montre comment les différentes variables du système dynamique évoluent dans le temps en une trajectoire non périodique.</span>
          D'un maniere plus generique un attracteur est un ensemble d'états vers lequel un système évolue de façon irréversible en l'absence de perturbations.
           Constituants de base de la théorie du chaos, au moins cinq types sont définis : ponctuel, quasi périodique, périodique, étrange et spatial.</p>
        </div>
    <div class="content" >
        <div class="container-center-img">
        <img src="resourses/images/Lorenz_Attractor.gif">
        </div>
    </div>

    <p>Cette courbe n’est pas celle du mouvement mais <span>représente les états du système </span>et elle montre que dans des cas où on aurait l’impression du désordre, 
    il y a cependant un certain type d’ordre, des lois, d’où l’expression "chaos déterministe".
    <span>Un attracteur signifie que la dynamique a tendance à être attirée par lui.</span> Par exemple, le fleuve est un attracteur du bassin fluvial.
    Etrange signifie que la forme de cet attracteur n’est pas une courbe ni une surface et n’est même pas continue mais reconstituée point par point de manière 
    discontinue par la dynamique qui, bien qu’apparemment désordonnée, reconstitue ce type spécial d’ordre. 
    <span>C’est un ordre de type chaos déterminsite car il obéit à la sensibilité aux conditions initiales </span>
    (un petit changement entraîne des possibilités de changements considérables par la suite). Il y a donc à la fois attraction et mélange.
    La notion d’attracteur étrange élargit considérablement le domaine de connaissance puisqu’elle permet d’étudier des phénomènes apparemment désordonnés et qui subissent cependant des contraintes tout à fait déterministes, parviennent à un certain type d’ordre dynamique qui n’est pas fondé sur une autre stabilité que celle d’une structure globale. dans le monde réle, ce type de système est courante : du nuage à l’économie et du rythme biologique à la dynamique d’une ville.</p>
   </div>

   <div class="modal-paragraph">

        <h2>Application</h2>
        <div class="content" >
        <p>Ici nous representons l'espace des phase sur 2 dimmensions:<span> La valeur de vitesse angulaire sur l'axe des X et la position en x du centre de gravite sur l'axe Y.</span> Lors du lancement 
        d'une simulation une erreur de quelques % est introduit dans la valeur de l'angle a l'origine. Cette erreur peut induire un grand changement dans l'etat physique du systeme.
        Hors malgres une differences flagrante de comportement <span>les deux systeme vont explorer le meme espace des phases:</span></p>
        
        <div class="container-flex container-block">
         <div class="container-flex-colomn container-padding container-center-img margin-center">
          <div class="container-center-img container-modal-img-large">
            <img src="resourses/images/attractor_simu2.JPG">
          </div>
          <p><span>Simulation 1</span>: valeur de sec=0.0016</p>
         </div>

          <div class="container-flex-colomn container-padding container-center-img margin-center">
            <div class="container-center-img container-modal-img-large">
              <img src="resourses/images/attractor_simu1.JPG">
            </div>
            <p><span>Simulation 2</span> avec l'ajout de l'erreur: valeur de sec=0.00160048</p>
          </div>
        </div>

        <p>Pour ce jeu de donnees nous voyons bien qu'une petite variation dans la valeur de la section de fuite a pour consequence un grand changement dans le comportement du systeme
        . Passant d'un regime pseudo-periodique a un regime stable</p>
        <p></p>
        
        <div class="container-flex-colomn container-block">
          <div class="container-flex-colomn container-padding">
          <div class="container-center-img container-modal-img-half">
            <img src="resourses/images/attractor_simu3.JPG">
          </div>
          <p>Nous affichons sur le meme graphique les deux simulations. Cela permet de se rendre compte que dans les modes chaotiques ils partagent le meme espace des phases. 
          Lors de la simulation les positions des points vont parcourir cet espace en fonction des valeurs calculees.</p>
          </div>
        </div>

        </div>


  </div>



  </div>
  <div class="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>
`;
modal.appendChild(div);
modal.style.display = "block";
span = document.getElementsByClassName("close")[0];
modal.style.height = mainBody.offsetHeight+'px';
}
