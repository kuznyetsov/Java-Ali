const cart = document.querySelector('.cart'),
    chip_open = document.querySelector('.chip-open'),
    chip_close = document.querySelector('.chip-close'),
    confirm = document.querySelector('.confirm'),
    add_chip = document.querySelectorAll('.add-chip'),
    cart_block = document.querySelectorAll('.cart-block'),
    cart_count = document.querySelector('.cart-count'),
    chip_total = document.querySelector('.chip-total > span');


function OpenChip () {
    chip_open.style.display = "block";
}

function CloseChip () {
    chip_open.style.display = "none";
}

cart.addEventListener('click', OpenChip);
chip_close.addEventListener('click', CloseChip);

function showConfirm() {
    confirm.style.display = 'block';
    let counter = 100;
    const id = setInterval(frame, 10);
    function frame() {
        if(counter == 10) {
            clearInterval(id);
            confirm.style.display = 'none';
        } else {
            counter--;
            confirm.style.transform = `translateY(-${counter}px)`;
            confirm.style.opacity = '.' + counter;
        }
    }
}

add_chip.forEach(function(btn, i) {
    btn.addEventListener('click', () => {
        showConfirm();

        // let item = cart_block[i],
        //     trigger = item.querySelector('button'),
        //     removeBtn = document.createElement('div'),
        //     empty = cart.querySelector('.empty');

        // trigger.remove();

        // showConfirm();
        // calcGoods();

        // removeBtn.classList.add('goods__item-remove');
        // removeBtn.innerHTML = '&times';
        // item.appendChild(removeBtn);

        // cart.appendChild(item);
        // if(empty) {
        //     empty.remove(); 
        // }
    });
});

// function calcGoods() {
//     const item = cart.querySelectorAll('.cart-block');
//     cart_count.textContent = item.length+1;
// }

































