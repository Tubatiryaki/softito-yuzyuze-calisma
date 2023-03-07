class User {
  constructor(userId) {
    this.userId = userId;
    this.Cars = [];
  }

  addCar(Car) {
    this.Cars.push(Car);
  }
  deleteCar(Car) {
    this.Cars = this.Cars.filter((car) => car !== Car);
  }
}

class Car {
  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
}

const userList = [];

function addUser() {
  const userId = document.getElementById("userId").value;

  if (!userId) {
    alert("User Id can not be empty");
    return;
  }
  if (userList.some((user) => user.userId == userId)) {
    alert("User ID alreadt exısts");
  }

  const user = new User(userId);
  userList.push(user);
  document.getElementById("userId").value;
  document.getElementById("userId").focus;

  userUpdate();
}
function userUpdate() {
  const SelectUser = document.getElementById("SelectUser");

  SelectUser.innerHTML = `<option disabled value selected> -- Select User --</option>`;

  userList.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.userId;
    option.innerText = user.userId;

    SelectUser.add(option);
  });

  const userCarList = document.getElementById("userList");
  userCarList.innerHTML = "";
  userList.forEach((user) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const thbtn = document.createElement("th");

    const DeleteUserButton = document.createElement("button");
    DeleteUserButton.innerText = "Delete User";
    DeleteUserButton.className = "btn btn-danger";

    DeleteUserButton.addEventListener("click", () => {
      deleteUser(user.userId);
    });
    th.innerText = user.userId;
    th.colSpan = 4;
    tr.appendChild(th);
    thbtn.appendChild(DeleteUserButton);
    tr.appendChild(thbtn);
    userCarList.appendChild(tr);

    var number = 0;

    user.car.forEach((car) => {
      number++;
      const carTr = document.createElement("tr");
    });
  });
}

document.getElementById("addUser").addEventListener("click", (e) => {
  e.preventDefault();
  addUser();
});

document.getElementById("addCar").addEventListener("click", (e) => {
  e.preventDefault();
  addCar();
});

userUpdate();

function addCar() {
  const userId = document.getElementById("userId").value;
  const carBrand = document.getElementById("carBrand").value.trim();
  const carColor = document.getElementById("carColor").value.trim();
  const carPrice = document.getElementById("carPrice").value.trim();

  if (
    userId === "" ||
    carBrand === "" ||
    carId === "" ||
    carPrice < 0 ||
    carColor === ""
  ) {
    alert("Boş alan bırakılamaz");
    return;
  }
  const user = userList.find((user) => user.userId === userId);

  const car = new Car(carId, carBrand, carColor, carPrice);

  user.addCar(car);
  userUpdate();

  carId = document.getElementById("carId").value = "";
  carBrand = document.getElementById("brand").value = "";
  carColor = document.getElementById("color").value = "";
  carPrice = document.getElementById("price").value = "";
}

function deleteUser(userId) {
  userList.splice(
    userList.findIndex((user) => user.userId === userId),
    1
  );
  userUpdate();
}

function deleteCar(userId, car) {
  const user = userList.find((user) => user.userId === userId);
  user.deleteCar(car);

  userUpdate();
}
