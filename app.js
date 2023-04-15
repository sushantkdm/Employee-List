let employees = [];
let idCounter = 1;

const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const employeeList = document.getElementById('employee-list');
const message = document.getElementById('message');

function displayEmployees() {
  employeeList.innerHTML = '';
  employees.map((employee) => {
    const li = document.createElement('li');
    li.innerHTML = `${employee.id}. &nbsp &nbsp Name: ${employee.name} &nbsp &nbsp Profession: ${employee.profession} &nbsp &nbsp Age: ${employee.age} &nbsp &nbsp <button class="delete-employee" data-id="${employee.id}">Delete User</button>`;
    employeeList.appendChild(li);
  });
}

function addEmployee(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  if (name === '' || profession === '' || age === '') {
    message.textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
    message.style.color = 'red';
    return;
  }
  else{
    document.getElementById('show').style.display = 'none';
  }

  const employee = {
    id: idCounter,
    name,
    profession,
    age
  };

  employees.push(employee);
  idCounter++;

  displayEmployees();

    message.textContent = 'Success : Employee Added!';
    message.style.color = 'green';
  
  form.reset();
}

function deleteEmployee(e) {
  if (e.target.classList.contains('delete-employee')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    employees = employees.filter((employee) => employee.id !== id);
    displayEmployees();
  }
}

form.addEventListener('submit', addEmployee);
employeeList.addEventListener('click', deleteEmployee); 