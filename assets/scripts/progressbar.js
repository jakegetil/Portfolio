var preloader = document.querySelector('#preloader');
preloader.remove();
document.body.style.overflow = 'visible';

var bar = new ProgressBar.Circle('#progress', {
    color: '#ADFF2F',
    duration: 2000,
    easing: 'easeInOut',
    text: {
        autoStyleContainer: false
    },
    from: { color: '#ADFF2F', width: 1 },
    to: { color: '#ADFF2F', width: 10 },
    
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('0');
        } else {
            circle.setText(value+'%');
            if(value == 100){
                setTimeout(()=>{
                    if (document.readyState === 'complete') {
                        preloader.remove();
                        document.body.style.overflow = 'visible';
                    } else {
                        window.addEventListener('load', () => {
                            preloader.remove();
                            document.body.style.overflow = 'visible';
                        });
                    }
                }, 500)
            }
        }

    }
});

bar.animate(1);
