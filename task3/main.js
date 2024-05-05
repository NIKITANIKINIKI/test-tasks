function toggleDisplay(buttonId, elementSelector, showText, hideText, displayValue) {
    const button = document.getElementById(buttonId);
    const element = document.querySelector(elementSelector);

    button.addEventListener('click', () => {
        if (element.style.display === 'none'){
            element.style.display = displayValue;
            button.innerText = showText;
        } else {
            button.innerText = hideText;
            element.style.display = 'none';
        }
    });
}

toggleDisplay('showContent', '#content', 'Спрятать ввод', 'Ввести параметры', 'flex');
toggleDisplay('showLog', '.log', 'Спрятать log', 'Показать log', 'block');


document.querySelector('#content button').addEventListener('click',()=>{

    const inputs=document.querySelectorAll('#content input[type="text"]')
    let isError=true

    inputs.forEach(input =>{
        if((!Number.isInteger(Number(input.value)) || Number(input.value) < 0) || input.value==='' ){
            isError=false
            input.classList.add('error')
        }
        else{
            input.classList.remove('error')
        }
    })

    if(!isError){
        alert('Некорректный ввод, введите, пожалуйста, натуральные числа')
        return
    }

    const n=parseInt(document.getElementById('catsNumber').value)
    const b=parseInt(document.getElementById('viskasNumber').value)
    const m=parseInt(document.getElementById('bowlCapacity').value)
    const t=parseInt(document.getElementById('eatingTime').value)
    const r=parseInt(document.getElementById('bowlUpdateTime').value)

    if(b>m){
        alert('Вместимость миски оказалась меньше количества корма необходимого, чтобы кот наелся')
        return
    }

    clearLog()
    eating(n,b,m,t,r)
    alert('Все успешно выполнено, можете посмотреть log')
})

function eating(n,b,m,t,r){

    createLog('Миска наполнена')

    let totalTime=0
    let hungryCats=n
    let foodAmount=m

    while(hungryCats>0){
        console.log(`${foodAmount}`)
        if(foodAmount>=b){
            totalTime+=t
            foodAmount-=b
            hungryCats--
            createLog(`Кот ${n-hungryCats} поел. Осталось еще голодных котов:${hungryCats}`)
        }
        else{
            createLog('Бабушка наполяет миску')
            totalTime+=r
            foodAmount=m
        }
    }

    createLog(`Все коты накормлены.Этот процесс занял ${totalTime} секунд`)

}

function createLog(mes){
    const logDiv=document.querySelector('.log')
    const p=document.createElement('p')
    p.textContent=mes
    logDiv.appendChild(p)
}

function clearLog(){
    const logDiv=document.querySelector('.log')
    logDiv.innerHTML=''
}