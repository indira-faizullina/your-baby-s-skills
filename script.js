const skillsArr = [
  {
    id: '1',
    skillDate: '05.01.2022',
    skillName: 'Первая улыбка',
  },
  {
    id: '2',
    skillDate: '01.10.2022',
    skillName: 'Первые шаги',
  },
]

// function to create a new item

function addNewSkill(skill, date) {
  const newItemSkillTd = document.createElement('td')
  newItemSkillTd.textContent = skill

  const newItemDateTd = document.createElement('td')
  newItemDateTd.textContent = date.split('-').reverse().join('.')

  const newItemTr = document.createElement('tr')
  newItemTr.append(newItemDateTd, newItemSkillTd)

  const table = document.querySelector('table')
  table.append(newItemTr)
}

const newSkillInputForm = document.querySelector('form')
newSkillInputForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const newSkillInputName = newSkillInputForm.querySelector('#new_skill')
  const newSkillName = newSkillInputName.value
  const newSkillInputDate = newSkillInputForm.querySelector('.input_date')
  const newSkillDate = newSkillInputDate.value

  //checking the correctness of the entered data

  const errorWindowExist = newSkillInputForm.querySelector('.error_window')
  if (newSkillName.trim() === '' || newSkillDate === '') {
    if (errorWindowExist === null) {
      createErrorWindow('Заполните все поля!')
    }
  } else {
    addNewSkill(newSkillName, newSkillDate)
    if (errorWindowExist) {
      errorWindowExist.remove()
    }
  }
})

// function to create a error window

const createErrorWindow = (text) => {
  const errorWindow = document.createElement('span')
  errorWindow.className = 'error_window'
  errorWindow.textContent = text

  const addItemButton = newSkillInputForm.querySelector('button')
  addItemButton.insertAdjacentElement('beforebegin', errorWindow)
}
