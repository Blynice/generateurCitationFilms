let mood = ["J'ai la parole et le manche l'une est d'or l'autre est d'acier Tony Montana, 1983",
  "Je met les pieds où je veux et c'est souvent dans la gueule.(Braddock, 1988)",
  "Car à personne, personne en ce monde tu ne dois te fier : ni aux hommes, ni aux femmes, ni aux bêtes.A ceci tu dois te fier. (Corin, chef des Cimmériens entre -14000 et -10000 avant JC)",
  "Pourquoi cet air si sérieux? (Joker, 2008)",
  "Pourquoi tombons nous ? Pour mieux apprendre à nous relever.(Alfred Pennyworth, 2005)",
  "Ce que vous appelez l'enfer, il appelle ça chez lui.(Colonel Trautman, 1982)",
  "Je ne suis pas venu protéger Rambo de la police, je suis venu protéger la police de Rambo. (Colonel Trautman, 1982)",
  "Bob Morton a commis une erreur ... il est temps aujourd'hui de réparer cette erreur( Richard « Dick » Jones, 1987)",
  "Je suis persuadé que vos connaissances pour ce genre de conneries dépasse l'entendement (John Quincy Wydell, 2005)",
  "Aboule ton pognon binoclard ou j'te fais péter le crane ! Et branche moi la pompe 7 pour un plein !(Emil Antonowsky,1987)"
];


for (i = 0; i < mood.length; i++) {
  function generate() {


    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

    document.querySelector('main').style.background = gradient;


    function changeText() {
      let text = document.getElementById("text");
      text.textContent = mood[Math.floor(Math.random() * 10)];
    };
    button.addEventListener("click", changeText);
  }

  document.onload = generate();
};


/*function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector()(".select").style.width = "600px";
    document.querySelector()("main").classList.add(".main");
  } else {
    document.querySelector()(".select").style.width = "1000px";
    document.querySelector()("#main_bg").classList.add(".main_deskt");
  }
}

var x = window.matchMedia("(max-width:700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/