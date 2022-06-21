// Data una lista della spesa, stampare sulla pagina 
// (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

//creo una lista 
const listShopping = ['mele','pere','melone','fragole','latte','biscotti','lievito'];

//*recupero ul nell'html e lo associo a ulList
let ulLista = document.getElementById('ul_item')
console.log(ulLista);

//inizializzo la variabile a 0
let i = 0 ;

//? creo un ciclo while e metto la sua condizione (i < listshopping.lenght)
//? quindi porta i alla lunhezza massima degli elementi dall'array
while(i<listShopping.length){
    //*creo l'elemento da voler aggiungere
    let list = document.createElement('li');

    //*associo la variabile agli elementi dell'array
    //*aggiungiamo gli elementi di listShopping all'elemento appena creato (list)
    //* con .innerHTML {in modo da aggiunggerlo ai tag creati e non sustituirli} 
    list.innerHTML = listShopping[i];
    console.log(list);

    //!la incremento in modo da non bloccare il ciclo 
    i++;

    //*porto la lista all'interno dell'html
    ulLista.append(list);
}