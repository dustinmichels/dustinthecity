// Wrap the table in a container dynamically
document.querySelectorAll('table').forEach((table) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('table-container')
  table.parentNode.insertBefore(wrapper, table)
  wrapper.appendChild(table)
})
