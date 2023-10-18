let count = 0;

document.getElementById('tri-btn').addEventListener('click',function(){

    validationCheck("triangle","tri-inp1","tri-inp2");       
})


document.getElementById('rhom-btn').addEventListener('click',function(){
    
    validationCheck("rhombus","rho-inp1","rho-inp2");       

})

document.getElementById('pent-btn').addEventListener('click',function(){

    validationCheck("pentagon","pent-inp1","pent-inp2");       

})

 
document.getElementById('rec-btn').addEventListener('click',function(){

    validationCheck("rectangle","rec-inp1","rec-inp2");       

})

document.getElementById('para-btn').addEventListener('click',function(){

    validationCheck("parallelogram","para-inp1","para-inp2");       

})


document.getElementById('elli-btn').addEventListener('click',function(){

    validationCheck("ellipse","elli-inp1","elli-inp2");       

})


// Function-2 [Doing Calculation]
function calculation(shape,area)
{
    const area_calc = document.getElementById('area-calc');

    count = count + 1;

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${count}.</td>
    <td>${shape}</td>
    <td>${area}cm<sup>2</sup></td>
    <td><button class="bg-sky-600 hover:bg-sky-400 rounded p-1 text-xs text-white">Convert to m<sup>2</sup></button></td>
    <br> <br>
    `;
    area_calc.appendChild(tr);
}