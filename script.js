let timer = document.getElementById('countDown');
let begin = 5;

setTimeout(() => {
    timer.innerHTML = begin;
    begin--;
    setTimeout(() => {
        timer.innerHTML = begin;
        begin--;
        setTimeout(() => {
            timer.innerHTML = begin;
            begin--;
            setTimeout(() => {
                timer.innerHTML = begin;
                begin--;
                setTimeout(() => {
                    timer.innerHTML = begin;
                    begin--;
                 setTimeout(() => {
                        timer.innerHTML = 'Happy Birthday Tharun';
                        timer.classList.add('text-danger')
 
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
                                    