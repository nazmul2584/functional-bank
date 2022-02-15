// function dibblit (num){
//     const result = num *2 ;
//     return result;
// }

// const first = dibblit(5);
// const second = dibblit(7);

function getinput(num){
    const inputfild = document.getElementById(num);
     const inputfildtext = inputfild.value;
    const inputfildfigur = parseFloat(inputfildtext);

    // clear diposite fild
    inputfild.value = '';
    return inputfildfigur;
   
}





document.getElementById('diposite-button').addEventListener('click',function(){
    // const inputfild = document.getElementById('deposite-input');
    // const inputfildtext = inputfild.value;
    // const inputfildfigur = parseFloat(inputfildtext);
    const inputfildfigur = getinput('deposite-input');
   

    // get current deposite

    const deposittotal = document.getElementById('deposite-total');
    const depositefildtext = deposittotal.innerText ;
    const depositefildfigur = parseFloat(depositefildtext);
    deposittotal.innerText = depositefildfigur + inputfildfigur;
    console.log(depositefildtext);

    // add deposite with total balance

    const balance = document.getElementById('balanc-total');
    const balancetext = balance.innerText;
    const balancefigur = parseFloat(balancetext);
    balance.innerText = balancefigur + inputfildfigur;




})

// widthraw 

document.getElementById('widthrow-button').addEventListener('click',function(){
    // const widthrwfild = document.getElementById('widthrow-input');
    // const widthrwfildtext = widthrwfild.value;
    // const widthrwfildfigur = parseFloat(widthrwfildtext);
    const widthrwfildfigur = getinput('widthrow-input')

    //withrow sowen fild
    const currentwidthraw = document.getElementById('withdraw');
    const currentwidthrawtext = currentwidthraw.innerText;
    console.log(currentwidthrawtext)
     const currentwidthrawfigur = parseFloat(currentwidthrawtext);
     currentwidthraw.innerText = currentwidthrawfigur + widthrwfildfigur;

    // balance handeler

    const balance = document.getElementById('balanc-total')
    const balancetext = balance.innerText;
    const balancetfigure = parseFloat(balancetext);
    
    balance.innerText = balancetfigure - widthrwfildfigur;

     // withdraw fild clear
     widthrwfild.value = '';


})

