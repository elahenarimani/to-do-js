"use strict"
const nameInput = document.querySelector("#name");
const familyInput = document.querySelector("#family");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const listBox = document.querySelector("#list-box");
const modalWrapperAdd = document.querySelector("#modal-wrapper-add");
const modalWrapperEdit = document.querySelector("#modal-wrapper-edit");
const editNameInput = document.querySelector("#edit-name");
const editFamilyInput = document.querySelector("#edit-family");
const editPhoneInput = document.querySelector("#edit-phone");
const editEmailInput = document.querySelector("#edit-email");
const modalWrapperRemove = document.querySelector("#modal-wrapper-remove");
let data=[];

// {start add data 
 function addData(name,family,mobile,email){
    console.log(data)
    let obj=({
        name:name,
        family:family,
        mobile:mobile,
        email:email,
        id:Date.now(),
        flag:true
    })
   data.push(obj);
   console.log(data);
}
function modalControllerHandler(){
     modalWrapperAdd.style.display = "flex";
}
function addBtnClickHandler(){
    modalControllerHandler()
    addData(nameInput.value,familyInput.value,phoneInput.value,emailInput.value);
    makeBoxInformation();
    nameInput.value ="";
    familyInput.value ="";
    phoneInput.value ="";
    emailInput.value ="";      
}
function modalFinishAddBtnHandler(){
  console.log("test")
  modalWrapperAdd.style.display = "none";
  console.log("cancleAdd") 
}
//finish add data}



//{make box
function makeBoxInformation(){
    let result='';
    data.forEach(item => {
        result =result + `
        <div class="w-[100%] h-[100%] flex justify-evenly items-center">
        <p  class="w-[19.5%] inline-block">${item.name}</p>
        <p  class="w-[19.5%] inline-block">${item.family}</p>
        <p  class="w-[19.5%] inline-block">${item.mobile}</p>
        <p  class="w-[19.5%] inline-block">${item.email}</p>
        <div class="w-[19.5%]  flex justify-evenly items-center gap-[1px]">
        <button class="w-[20px] h-[20px]" onclick="modalEditControllerHandler(${item.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="red" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </button>
        <button class="w-[20px] h-[20px]" onclick="modalStartRemoveBtnHandler(${item.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        </button>
      </div>
      </div>
        `
    }) 
        listBox.innerHTML=result;
}
//}make box




//{edit data
function editData(dataId,editName,editFamily,editPhone,editEmail){
    const indexFinder = data.findIndex(item => item.id == dataId);
    console.log(indexFinder)
    if(indexFinder >= 0){
       data[indexFinder].name = editName;
       data[indexFinder].family = editFamily;
       data[indexFinder].mobile = editPhone;
       data[indexFinder].email = editEmail;
    }
    console.log(data)
}
function modalEditControllerHandler(dataId){
  modalWrapperEdit.style.display = "flex";
  changeRemoveFlag(dataId);
  editNameInput.value = data.find(item => item.id ==dataId).name; 
  editFamilyInput.value = data.find(item => item.id ==dataId).family; 
  editPhoneInput.value = data.find(item => item.id ==dataId).mobile; 
  editEmailInput.value = data.find(item => item.id ==dataId).email;
}
function submitEditClickHandler(){
  console.log("data")
   const finder = data.find(item => item.flag ==false);
   console.log(finder)
   if (finder){
    editData(finder.id,editNameInput.value,editFamilyInput.value, editPhoneInput.value,editEmailInput.value);
    console.log(editNameInput.value)
    changeToDefaultMode();
    makeBoxInformation();
    modalWrapperEdit.style.display = "none";
   }
    }
function modalFinishEditBtnHandler(){
  modalWrapperEdit.style.display = "none";
}







//remove{
  function removeData(dataId){
    console.log(data);
    data = data.filter(item => item.id !== dataId);
    console.log(data);
  }
  function changeRemoveFlag(dataId){
      data = data.map(item => {
        if(item.id == dataId){
             return {
              name : item.name,
              family : item.family,
              mobile : item.mobile,
              email : item.email,
              id : item.id,
              flag:false
             }
             }else{
              return{
              name : item.name,
              family : item.family,
              mobile : item.mobile,
              email : item.email,
              id : item.id,
              flag:true
              }
             }
      })
  }
  function modalStartRemoveBtnHandler(dataId){
    modalWrapperRemove.style.display = "flex";
    changeRemoveFlag(dataId)
  }
  function notRemove(){
    changeToDefaultMode();
    modalWrapperRemove.style.display = "none";
  }
  function changeToDefaultMode(){
    data = data.map(item => ({
      name : item.name,
      family : item.family,
      mobile : item.mobile,
      email : item.email,
      id : item.id,
      flag:true
    }))
  }
  function yesRemove(){
    const finder = data.find(item => item.flag == false);
    if(finder){
      removeData(finder.id);
      makeBoxInformation();
      modalWrapperRemove.style.display = "none";
    }
  }
  function removeBtnClickHandler(dataId){
     console.log("saalam");
     removeData(dataId);
     makeBoxInformation();
     changeToDefaultMode();
  }
//}remove
makeBoxInformation();