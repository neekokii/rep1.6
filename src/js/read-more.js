let initReadMoreBtn = function () {
  let paragraphsWrapper = document.querySelector('.main__paragraphs-wrapper')
  let paragraphShowMoreBtn = document.querySelector('#show-more-paragraphs-btn')
  let paragraphsWrapperMaxHeight = paragraphsWrapper.style.maxHeight
  let paragraphShowMoreBtnPrevText = paragraphShowMoreBtn.textContent
  let secondParagraph = paragraphsWrapper.querySelector(
    '.main__paragraph-second'
  )

  paragraphShowMoreBtn.addEventListener('click', function () {
    if (!paragraphShowMoreBtn.classList.contains('show-more-btn--active')) {
      paragraphShowMoreBtn.textContent = 'Скрыть'
      paragraphShowMoreBtn.classList.toggle('show-more-btn--active')
      paragraphsWrapper.style.maxHeight = 'min-content'
      secondParagraph.style.display = 'block'
    } else {
      paragraphShowMoreBtn.textContent = paragraphShowMoreBtnPrevText
      paragraphShowMoreBtn.classList.toggle('show-more-btn--active')
      paragraphsWrapper.style.maxHeight = paragraphsWrapperMaxHeight
      secondParagraph.style.display = 'none'
    }
  })
}

export default initReadMoreBtn
