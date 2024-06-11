document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.my-atropos').forEach((element) => {
        Atropos({
            el: element,
            activeOffset: 40,
            shadowScale: 0,
            rotate: true,
            rotateXMax: 5,
            rotateYMax: 5,
        });
    });
});