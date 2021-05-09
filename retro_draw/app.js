function makePalette() {
    const PALETTE = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
    ]
    
    for (let i = 0; i < PALETTE.length; i++) {
        const nextColor = PALETTE[i]
        const colorButton = $('<button>')
    
        $('.palette').append(colorButton)
        colorButton.css('background-color', nextColor)
    }
    $('.palette button').first().addClass('active');
}

makePalette();

function makeGrid() {
    for (let i = 0; i < 64; i++) {
        $('.grid').append('<div class="cell"></div>')
    }
}

makeGrid();

function onPaletteClick() {
    $('.palette button').removeClass('active')
    $(this).addClass('active')
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
    if ($(this).css('background-color') === $('.active').css('background-color')) {
        $(this).css('background-color', '')
    } else {
        $(this).css('background-color', $('.active').css('background-color'))
    }
}

$('.grid .cell').click(onGridClick);

function onClearClick() {
    $('.grid .cell').css('background-color', '')
}

$('.clear').click(onClearClick);

function onFillAllClick() {
    $('.grid .cell').css('background-color', $('.active').css('background-color'))
}

$('.fill-all').click(onFillAllClick);

function onFillEmptyClick() {
    let element = $('.cell')

    for (let i = 0; i < element.length; i++) {
        let nextElement = $(element[i])
        if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
            nextElement.css('background-color', $('.active').css('background-color'))
        }
    }
}

$('.fill-empty').click(onFillEmptyClick);