
//per accedere al DOM dobbiamo verificare che il DOM sia pronto
 //function è la funzione che verrà chiamara quando il DOM è pronto
// window.addEventListener('DOMContentLoaded', function(){

//     //vogliamo accedere a dati dalla pagina html
//     var frm = document.getElementById('dati');
//     console.log(frm);

//     //creo un array per creare una combo dinamicamente
//     var colors = ['red', 'green', 'blue'];

//     //select è l'elementpo della combo
//     var combo = document.createElement('select');

//         while(colors.length){
//         var colore = colors.pop();
//             //Option è anche una funzione globale
//             //il valoree di Option è lo stesso testo che verra usato nella combo
//             var opt = new Option(colore,colore);
//             combo.options[combo.options.length]= opt;
//         }

// frm.appendChild(combo);


// });

//per accedere al DOM dobbiamo verificare che il DOM sia pronto
 //function è la funzione che verrà chiamara quando il DOM è pronto
window.addEventListener('DOMContentLoaded',
                       function(){
  
     //vogliamo accedere a body della pagina html
    var f = document.body;
    console.log(f);

    //creo un array per creare una combo dinamicamente
    colors = ['red','green','blue'];
 
    //select è l'elementpo della combo
    var combo = document.createElement('select');

  while(colors.length){
  var colore = colors.pop();
  //il valoree di Option è lo stesso testo che verra usato nella combo
   var opt = new Option(colore,colore);
      opt.style.backgroundColor = colore;
  combo.options[combo.options.length]= opt;
}
  f.appendChild(combo);
  
});

