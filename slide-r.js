class SlideLeft {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleLeft = 'style-left';

        slideTrans(sliderBlock)

        const animationName = 'slide-animation'

        observer(animationName, sliderBlock)
    }
}

class SlideRight {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleRight = 'style-right'

        slideTrans(sliderBlock)

        const animationName = 'slide-animation-right'

        observer(animationName, sliderBlock)
    }
}

class SlideBottom {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleBottom = 'style-bottom'

        slideTrans(sliderBlock)

        const animationName = 'slide-animation-bottom'

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