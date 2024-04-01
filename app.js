let clearBtn = document.querySelector('.clear')
let predBtn = document.querySelector('.pred')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item1')

thumbnail.appendChild(thumbnailItems[1])

// Function for next button 
clearBtn.onclick = function() {
    moveSlider('clear')
}


// Function for prev button 
predBtn.onclick = function() {
    moveSlider('pred')
}

function clearSketchpad() {
    if(confirm('Are you sure you want to clear the sketchpad?')) {
        let cells = document.querySelectorAll('.cell')
        cells.forEach(cell => {
            cell.style.backgroundColor = 'white'
        })
    }
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item1')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item1')
    
    if(direction === 'clear'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('clear')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('pred')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'clear'){
            slider.classList.remove('clear')
        } else {
            slider.classList.remove('pred')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}