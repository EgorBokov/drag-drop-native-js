const dragNdrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0);
    }

    const dragOver = function(evt) {
        evt.preventDefault(); // чтобы сработал drop event
    }

    const dragEnd = function() {
        this.classList.remove('hide');
    }


    const dragEnter = function(evt) {
        evt.preventDefault();
        console.log('enter')
        this.classList.add('hovered');
    }

    const dragLeave = function() {
        this.classList.remove('hovered');
    }

    const dragDrop = function() {
        this.append(card);
        this.classList.remove('hovered');
    }

    cells.forEach(cell => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop);
    });
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
}

dragNdrop();