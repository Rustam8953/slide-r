class SlideDiemos {
    constructor(selector, direction) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        const directionAnim = typeof direction === 'string' ? direction : alert('Некорректно')

        sliderBlock.dataset.styleLeft = `style-${directionAnim}`;

        slideTrans(sliderBlock)

        const animationName = `slide-animation-${directionAnim}`;

        observer(animationName, sliderBlock)
    }
}

function slideTrans(item) {
    item.classList.add('transition', 'opacity')
}

function observer(animationName, itemName) {
    let observer = new IntersectionObserver(ens => {
        ens.forEach(en => {
            if(typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return
            }

            if(en.isIntersecting) {
                en.target.classList.add(animationName)
            }
        })
    })
    observer.observe(itemName)
}