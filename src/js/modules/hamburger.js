const hamburger = (hamburgerSelector, closeSelector, blockSelector) => {
    const hamburgerBtn = document.querySelector(hamburgerSelector),
        closeBtn = document.querySelector(closeSelector),
        blockHeader = document.querySelector(blockSelector)

    hamburgerBtn.addEventListener('click', () => {
        blockHeader.classList.add('header__block_active')
    })
    
    closeBtn.addEventListener('click', () => {
        blockHeader.classList.remove('header__block_active')
    })
}

export default hamburger