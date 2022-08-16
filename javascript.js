const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs(col, rows) {
    for(let i = 0; i < col*rows; i++) {
        const div = document.createElement('div')
        div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16, 16)

function grayColor() {
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = "Gray"
    btnGray.addEventListener('click' , () => {
        
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let randomNumber = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}

grayColor()

function blackColor() {
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = "Black"
    btnBlack.addEventListener('click' , () => {
        
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()

function rgbColor() {
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = "RGB"
    btnRGB.addEventListener('click' , () => {
        
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R}, ${G}, ${B})`
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()

function reset() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}

function resize() {
    btnSize.textContent = "Grid size"
    btnSize.addEventListener('click', () => {
        let user = prompt("What size do you want your grid to be?")
        if(user === null || user < 1) {
            reset()
            createDivs(16, 16)
            blackColor()
            grayColor()
            rgbColor()
        } else {
            reset()
            createDivs(user, user)
            blackColor()
            grayColor()
            rgbColor()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
resize()