          //AJouter et lire des elememnts Cursus
          localStorage.setItem("1cr", "2017: BAC Scientifique");
          var cr1=localStorage.getItem("1cr")

          localStorage.setItem("2cr", "20: bepinex");
          var cr2=localStorage.getItem("2cr")

          localStorage.setItem("3cr", "Actuellement: Niveau 2 en ICT4D");
          var cr3=localStorage.getItem("3cr")

          //Affichage des elemnts cursus dans une liste
          var list = document.getElementById('ajoutcr');
            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cr1));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cr2));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cr3));
            list.appendChild(entry);
          

          //AJouter et lire des elememnts Competence
          localStorage.setItem("1cp", "Maitrises des langages de programmations tels que le C, PYTHON, Java, C#, Html, css");
          var cp1=localStorage.getItem("1cp")

          localStorage.setItem("2cp", "Maitrises des outils de bureautique");
          var cp2=localStorage.getItem("2cp")

          localStorage.setItem("3cp", "Rythme verbal, ton");
          var cp3=localStorage.getItem("3cp")

          localStorage.setItem("4cp", "Créativité");
          var cp4=localStorage.getItem("4cp")
          
          localStorage.setItem("5cp", "Travail en Equipe");
          var cp5=localStorage.getItem("5cp")

          localStorage.setItem("6cp", "Ouverture d'esprit");
          var cp6=localStorage.getItem("6cp")


          //Affichage des elemnts competence dans une liste
          var list = document.getElementById('ajoutcp');
            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cp1));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cp2));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cp3));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cp4));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cp5));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(cp6));
            list.appendChild(entry);

            //Ajout d'une competence
        var list = document.getElementById('ajoutex');
            var entry = document.getElementById('formAddName');
            entry.onsubmit = function(evt) {
            evt.preventDefault();
            var firstName = document.getElementById('firstName').value;
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(firstName));
            list.appendChild(entry);
            
          }
          
          


              //AJouter et lire des elememnts Nom
          localStorage.setItem("1nm", "NOM: NDENGUE");
          var nm1=localStorage.getItem("1nm")

          localStorage.setItem("2nm", "PRENOM: CLAUDE");
          var nm2=localStorage.getItem("2nm")

          localStorage.setItem("3nm", "AGE: 25 ans");
          var nm3=localStorage.getItem("3nm")


          //Affichage des elemnts nom dans une liste
          var list = document.getElementById('ajoutnm');
            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(nm1));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(nm2));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(nm3));
            list.appendChild(entry);

                  //AJouter et lire des elememnts Contact
          localStorage.setItem("1ct", "MAIL: ngengueclaud@gmail.com");
          var ct1=localStorage.getItem("1ct")

          localStorage.setItem("2ct", "TEL: 00237694735434");
          var ct2=localStorage.getItem("2ct")

          //Affichage des elemnts contact nom dans une liste
          var list = document.getElementById('cnt');
            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(ct1));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(ct2));
            list.appendChild(entry);


            //AJouter et lire des elememnts Experience
          localStorage.setItem("1ex", "Juillet-Septembre 2017: Stage Proffessionel,systeme de gestion des BD, a INTEL Sarl");
          var ex1=localStorage.getItem("1ex")

          localStorage.setItem("2ex", "Avril-Juin 2018: stage academique, gestion et configuration d'un reseaux informatique");
          var ex2=localStorage.getItem("2ex")

          localStorage.setItem("3ex", "Avril-Juin 2018: Chef de projet, celui d'une implémentation d'un jeu en langage Python");
          var ex3=localStorage.getItem("3ex")


          //Affichage des elemnts experience dans une liste
          var list = document.getElementById('ajoutex');
            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(ex1));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(ex2));
            list.appendChild(entry);

            var entry= document.createElement('li');
            entry.appendChild(document.createTextNode(ex3));
            list.appendChild(entry);

