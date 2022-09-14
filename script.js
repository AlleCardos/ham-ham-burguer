let btn = document.getElementById('btn');

//add event 'click' in button
btn.addEventListener('click', (e) =>{

    //counts inputs with class 'number'
    let numberLenghts = document.getElementsByName('number').length;

    /*empty list to receive each value*/
    let qtdeList = [];

    //const list with prices
    const priceList = [17,20,10,22,23,29,18,21,12,10,5];

    //other variables
    let result = 0;
    let resultContainer = document.getElementById('resultPrice');
    let taxa = Number(document.carte.taxa.value);
    let desconto = Number(document.carte.descount.value);

    for(i = 0; i < numberLenghts; i++){
        let number = document.getElementsByName('number')[i].value;
        qtdeList.push(Number(number));  //insert values in array
    }

    for(i = 0; i < numberLenghts; i++){
        result += qtdeList[i] * priceList[i];
    }

    result += taxa - desconto;

    //result output
    if(result < 0){
        resultContainer.innerHTML = "<span class='resultado'> Pedido Inválido </span>";
    }else if(result == 0){
        resultContainer.innerHTML = "<span class='resultado'> Seu pedido está vazio </span>";
    }
    else{
        resultContainer.innerHTML = "<span class='resultado' >R$" + result + ",00</span>";
    } 
})
