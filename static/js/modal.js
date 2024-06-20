function openModal(imageId) {
  console.log('openModal', imageId)

  const modal = document.getElementById('myModal')
  if (modal === null) {
    return
  }

  // Get the original image element and use it inside the modal
  const img = document.getElementById(imageId)
  const modalImg = document.getElementById('modalImg')
  const captionText = document.getElementById('caption')

  // Display modal
  modal.style.display = 'block'
  modalImg.src = img.src
  captionText.innerHTML = img.alt

  // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
  document.addEventListener(
    'click',
    function (event) {
      console.log('event.target', event.target)
      if (
        event.target.matches('.modal-close') ||
        !event.target.closest('.modal-image')
      ) {
        closeModal()
      }
    },
    false,
  )

  // When the user hits ESC, close modal as well.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  })
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none'
}
