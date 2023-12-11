function pridetiIDuomenis() {
    const fullNameInput = document.getElementById('fullName');
    const fullName = fullNameInput.value.trim();
  
    if (fullName !== '') {
      const [name, surname] = fullName.split(' ');
  
      const person = {
        name: name,
        surname: surname
      };
  
      let people = JSON.parse(localStorage.getItem('people')) || [];
      people.push(person);
      localStorage.setItem('people', JSON.stringify(people));
  
      updateTable();
  
      fullNameInput.value = '';
    }
  }

  
  
  function updateTable() {
    const tableBody = document.querySelector('#lentele tbody');
    tableBody.innerHTML = '';
  
    const people = JSON.parse(localStorage.getItem('people')) || [];
  
    people.forEach(person => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.surname}</td>
      `;
      tableBody.appendChild(row);
    });
  }


  
//   trina pirmą
  function istrintiPirma() {
    let people = JSON.parse(localStorage.getItem('people')) || [];
  
    if (people.length >= 1) {
      people.shift();
      localStorage.setItem('people', JSON.stringify(people));
      updateTable();
    }
  }
//   trina paskutinį
  function istrintiPaskutini() {
    let people = JSON.parse(localStorage.getItem('people')) || [];
  
    if (people.length >= 1) {
      people.pop();
      localStorage.setItem('people', JSON.stringify(people));
      updateTable();
    }
  }
  updateTable();
  
 
  