document.addEventListener('DOMContentLoaded',() => {
    //cards
    const cardsArray=[
        {
        name:'fries',
        img:'src/images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'hotdog',
            img:'src/images/hotdog.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake'
        },

    ]
    
    cardsArray.sort(()=> 0.5 - Math.random());
    
    console.log(cardsArray);
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen=[]
    let cardsWon=[]
    let cardsChosenIds=[]

    function createboard(){
        for (let i = 0; i < cardsArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
            
        }
    }
    

    function flipCard(){
        let cardId=this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src',cardsArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkformatch,500)
            
        }


    }
    function checkformatch(){
        const cards = document.querySelector('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId == optionTwoId){
            alert(' u have clicked the same img')
            cards[optionOneId].setAttribute('src','src/images/blank.png')
            cards[optionTwoId].setAttribute('src','src/images/blank.png')
        } else if (optionOneId[0] === optionTwoId[1]){
            alert('you have found a match')
            cards[optionOneId].setAttribute('src','src/images/white.png')
            cards[optionTwoId].setAttribute('src','src/images/white.png')
            cards[optionOneId].removeEventListerner('click',flipCard)
            cards[optionTwoId].removeEventListerner('click',flipCard)
            cardsWon.push(cardsChosen) 
        } else{
            cards[optionOneId].setAttribute('src','src/images/blank.png')
            cards[optionTwoId].setAttribute('src','src/images/blank.png')
            alert('try again')
        }
        cardsChosen=[]
        cardsChosenIds=[]
        resultDisplay.textContent=cardsWon.length
        if(resultDisplay == 6){
            resultDisplay.textContent='yaaaaaay'
        }

        console.log(cardsChosen)
        console.log(cardsWon)
        
    }



    createboard();





    
})