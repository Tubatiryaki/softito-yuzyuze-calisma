class User{
constructor(userId,userFirstName,userLastName,userAge,userLicence){
    this.userId=userId;
    this.userFirstName=userFirstName;
    this.userLastName=userLastName;
    this.userAge=userAge;
    this.userLicence=userLicence;
    this.Cars=[];

}
addCar(Car){
    this.Cars.push(Car);
}
deleteCar(Car){
    this.Car=this.Cars.filter((car)=>car!=Car);
}
}

class Car{
    constructor(userCarId,userId,carId,price,color){
        this.userCarId=userCarId;
        this.userId=userId;
        this.carId=carId;
        this.price=price;
        this.color=color;

    }
}

const userList=[];

function addUser(){
    const selectUser=document.getElementById("SelectUser").value;
    const userId=document.getElementById("userId").value.trim();
    const firstName=document.getElementById("userFirstName").value.trim();
    const lastName=document.getElementById("userLastName").value.trim();
    const age=document.getElementById("userAge").value.trim();
    const licence=document.getElementById("userLicence").value.trim();

    if(userId==="" ||firstName==="" ||lastName==="" ||age<=18 ||licence===""){
        alert("Geçersiz değer girdiniz");
        return;
    }
   if(userList.some((user)=>user.userId==userId)){
    alert("User Already Exists");
    return;
   }
   const user=new User(userId);
   userList.push(user);
   document.getElementById("userId").value="";
   document.getElementById("userId").focus;

   userUpdate();
    

}

function userUpdate(){
    const selectUser=document.getElementById("SelectUser");
    selectUser.innerHTML=`<option disabled value selected>--Select User--</option>`

    userList.forEach((user)=>{
        const option=document.createElement("option");
        option.value=user.userId;
        option.innerText=user.userId;

        selectUser.add(option);
    });

    const userCarList=document.getElementById("carList");
    userCarList.innerHTML="";
    userList.forEach((user)=>{
        const tr=document.createElement("tr");
        const th=document.createElement("th");
        const thbtn=document.createElement("th");
        
        const DeleteUserButton=document.createElement("button");
        DeleteUserButton.innerText="Delete User";
        DeleteUserButton.className="btn btn-btn-danger";

        DeleteUserButton.addEventListener("click",()=>{
            deleteUser(user.userId);
        });
        th.innerText=user.userId;
        th.colspan=4;
        tr.appendChild(th);
        thbtn.appendChild(DeleteUserButton);
        tr.appendChild(thbtn);
        userCarList.appendChild(tr);

        var userId=0;

        user.Cars.forEach((user)=>{
            userId++;

            const userTr=document.createElement("tr");
            const userIdTd=document.createElement("td");
            userIdTd.innerText=userId;

            const userFirstNameTd=document.createElement("td");
            const userLastNameTd=document.createElement("td");
            const userAgeTd=document.createElement("td");
            const userLicenceTd=document.createElement("td");

            userFirstNameTd.innerText=user.userFirstName;
            userLastNameTd.innerText=user.userLastName;
            userAgeTd.innerText=user.userAge;
            userLicenceTd.innerText=user.userLicence;

            const DeleteUserButton=document.getElementById("button");
            DeleteUserButton.innerText="Delete User";
            DeleteUserButton.className="btn btn-warning";

            DeleteUserButton.addEventListener("click",()=>{
               
            })


        })

        
    })
}

document.getElementById("addUser").addEventListener("click",(e)=>{
    e.preventDefault();
    addUser();
    
    
});
