function openTab(tabNumber) {
  let i
  let tabContent

  tabContent = document.getElementsByClassName('w-tab')

  // for (i = 0; i < tabContent.length; i++) {
  //   tabContent[i].classList.remove('active')
  // }

  tabContent.forEach(function (item) {
    item.classList.remove('active')
  })

  document.getElementById(tabNumber).classList.add('active')
}

function tabMenuEffect(tabLinkNumber) {
  let i
  let tabMenu

  tabMenu = document.getElementsByClassName('tab-menu-button')

  tabMenu.forEach(function (item) {
    item.parentNode.classList.remove('active')
  })

  // for (i = 0; i < tabMenu.length; i++) {
  //   tabMenu[i].parentNode.classList.remove('active')
  // }

  document.getElementById(tabLinkNumber).parentNode.classList.add('active')
}

let tabDefault = document.getElementById('Tab1')
let tabMenuDefault = document.getElementById('Tab1Link')
if (tabDefault) {
  tabDefault.classList.add('active')
}
if (tabMenuDefault) {
  tabMenuDefault.parentNode.classList.add('active')
}

const tabLinks = document.querySelectorAll('.tabLink')

function addFunctionsToTab(item, index) {
  item.addEventListener('click', function () {
    openTab(`Tab${index + 1}`)
    tabMenuEffect(`Tab${index + 1}Link`)
  })
}

tabLinks.forEach(addFunctionsToTab)

// tabLinks.forEach((tabLink, index) => {
//   tabLink.addEventListener('click', function () {
//     openTab(`Tab${index + 1}`)
//     tabMenuEffect(`Tab${index + 1}Link`)
//   })
// })

// tabLinks.forEach((tabLink, index) => {
//   tabLink.addEventListener('click', function() {
//     openTab(`Tab${index + 1}`)
//     tabMouseEffect(`Tab${index + 1}Link`)
//   })
// }

// Tab1LinkEl.addEventListener(
//   'click',
//   function () {
//     openTab('Tab1')
//     tabMenuEffect('Tab1Link')
//   },
//   false
// )

// Tab2LinkEl.addEventListener(
//   'click',
//   function () {
//     openTab('Tab2')
//     tabMenuEffect('Tab2Link')
//   },
//   false
// )
// Tab3LinkEl.addEventListener(
//   'click',
//   function () {
//     openTab('Tab3')
//     tabMenuEffect('Tab3Link')
//   },
//   false
// )
