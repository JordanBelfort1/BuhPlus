const scroll = (linksSelector, scrollTopSelector) => {
    const linksList = document.querySelectorAll(linksSelector)

    const showScrollTop = () => {
        window.addEventListener('scroll', () => {
            let scroll = document.querySelector(scrollTopSelector)
            if (window.scrollY > 900) {
                scroll.classList.add('scroll_top_active')
            } else {
                scroll.classList.remove('scroll_top_active')
            }
        });
    }

    const scrollToAnchor = () => {
        linksList.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()
                let linkId = link.getAttribute('href')
                let blockId = document.querySelector(' ' + linkId)
                blockId.scrollIntoView({
                    behavior: 'smooth',
                })
            })
        })
    }

    showScrollTop()
    scrollToAnchor()
}

export default scroll
