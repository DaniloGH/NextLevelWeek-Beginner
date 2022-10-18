//////////////* FEATURE ADD NEW TIME *////////////////////////
document.querySelector("#add-time")
.addEventListener('click', verifyFilling);

function verifyFilling() { // Verifica se todos os campos estão preenchidos
  const hoursSection = document.querySelector('#schedule-items');
  const selectFields = hoursSection.querySelectorAll('select');
  const inputFields = hoursSection.querySelectorAll('input');
  let allSelectFieldsFilled = true;
  let allInputFieldsFilled = true; 
  selectFields.forEach(function(item) { //Percorre todos os campos de seleção
    if(item.selectedIndex == 0){ //Verifica se há algum campo dia da semana selecionado
      allSelectFieldsFilled = false;
    }
  })
  inputFields.forEach(function(item) { //Percorre todos os campos inputs
    if(!item.value){ //Verifica se há algum campo sem horário selecionado
      allInputFieldsFilled = false;
    }
  })
  if(allSelectFieldsFilled&&allInputFieldsFilled){
    addFields(); // Adiciona um novo schedule-item (novo horário)
  } else {
    alert('Preencha os horários em aberto antes de adicionar um novo horário.');
  }
}

function addFields() {
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
  const fields = newFieldContainer.querySelectorAll('input');
  fields.forEach(function(field) {
    field.value = "";
  })
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

//////////////* REMOVE TIME FEATURE *////////////////////////
function removeSchedule(element) {
  const hoursSection = document.querySelector('#schedule-items');
  const numberHoursSections = hoursSection.querySelectorAll('.schedule-item');
  if(numberHoursSections.length > 1){
    element.closest("div").remove();
  } else {
    alert('NÃO PERMITIDO: É preciso ter no mínimo um horário disponível.');
  }

}