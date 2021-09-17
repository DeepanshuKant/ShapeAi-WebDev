let globalTaskData = [];
taskContents = document.getElementById("taskContents");


const addcard = () => {

  const newtaskDetails = {
    id: `${Date.now()}`,
    url: document.getElementById("imageURL").value,
    title: document.getElementById("taskTitle").value,
    type: document.getElementById("taskType").value,
    description: document.getElementById("taskDescription").value
  };
  // taskContents = document.getElementById("taskContents");
  taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newtaskDetails));

  globalTaskData.push(newtaskDetails)
  saveToLocalStorage();
}

const generateTaskCard = ({ id, url, title, type, description }) =>
  `<div class="col-6 col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline-info">
            <i class="bi bi-pencil-fill"></i>
          </button>

          <button type="button" class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)">
            <i class="bi bi-trash-fill" name=${id} onclick="deleteTask(this)"></i>
          </button>
        </div>
      </div>

      <img src=${url} class="card-img-top" alt="image" />

      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <span class="badge bg-primary">${type}</span>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-primary float-end">
          Open task
        </button>
      </div>
    </div>
  </div>`


const saveToLocalStorage = () => {
  localStorage.setItem("tasky", JSON.stringify({ tasks: globalTaskData }));
}

const reloadTaskCard = () => {
  const localStorageCopy = JSON.parse(localStorage.getItem("tasky"));
  console.log(localStorageCopy)
  if (localStorageCopy) {
    globalTaskData = localStorageCopy.tasks;
  }
  globalTaskData.map((cardData) => {
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(cardData));
  })
}

const deleteTask = (e) => {
  // console.log(e)
  // console.log(e.target)
  const targetID = e.getAttribute("name")
  console.log(targetID)

  globalTaskData = globalTaskData.filter((cardData) => cardData.id !== targetID);
  saveToLocalStorage();
  window.location.reload();
}
