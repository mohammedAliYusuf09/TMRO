// const DAYS_INi = [[
//     "6/1/2024", [{
//         taskID : 0,
//         task: "DSA Quition Solving",
//         duDate: {
//             start: "7: 00",
//             end: "8: 00"
//         },
//         done: false
//     },{
//         taskID : 1,
//         task: "Core Development knoledg",
//         duDate: {
//             start: "9: 00",
//             end: "10: 00"
//         },
//         done: false
//     },{
//         taskID : 2,
//         task: "Telwind css projects",
//         duDate: {
//             start: "10: 00",
//             end: "11: 00"
//         },
//         done: false
//     }]
// ],[
//     "6/30/2024", [{
//         taskID : 0,  
//         task: "Core Development knoledg",
//         duDate: {
//             start: "7: 00",
//             end: "8: 00"
//         },
//         done: false
//     },{
//         taskID : 1,
//         task: "DSA Quition Solving",
//         duDate: {
//             start: "9: 00",
//             end: "10: 00"
//         },
//         done: false
//     },{
//         taskID : 2,
//         task: "Telwind css projects",
//         duDate: {
//             start: "10: 00",
//             end: "11: 00"
//         },
//         done: false
//     }]
// ]]


let DAY_INITIOUL = [
    "DATE...", []
]


const DAYS_INi = [];


//getting id 
const innerTime = document.querySelector('#innerTime');
const taskContainer = document.querySelector('#inner-tasklist');  
const innetTimeID = document.querySelector('#innerTime');
const taskDateID = document.querySelector('#task-date');
const taskBody = document.querySelector('#task-body');
const duStart = document.querySelector('#start-task');
const duEnd = document.querySelector('#end-task');
const addButton = document.querySelector('#addBTN');
const btn_done = document.querySelector('#btn_done');
const task_output = document.querySelector('#task-output');




const renderDayes = ()=> {
    task_output.innerHTML = '';
    for(let i = 0; i < DAYS_INi.length; i++){
        const day_task =  document.createElement('div');
        day_task.classList.add('task-day');
        const display_date = document.createElement('p');
        display_date.innerText = DAYS_INi[i][0];
        day_task.append(display_date);
        task_output.append(day_task);
        const printChild=()=> {
            DAYS_INi[i][1].forEach(item=> {
                // const DuDate =item[i].duDate;
                const task_body = document.createElement('div');
                task_body.classList.add('flex-task');
                const chackIMG = document.createElement("img");
                chackIMG.setAttribute('id', 'img');
                chackIMG.src = "Images/check.png"; 
                const task_start_end = ` ${item.task} |  ${item.duDate.start} -  ${item.duDate.end}`;
                task_body.append(chackIMG);
                task_body.append(task_start_end);
                day_task.append(task_body);
            })
        }
        printChild();
    }
}


btn_done.addEventListener('click', ()=> {
    if(innerTime.textContent !== "DATE...") {
        DAYS_INi.push(DAY_INITIOUL);
        renderDayes();
        taskContainer.innerHTML = '';
        DAY_INITIOUL = [
            "DATE...", []
        ]
    }else {
        alert("Add your date")
    }
})






const taskDate = DAY_INITIOUL[0];
innerTime.innerText = taskDate;

const renderDate=()=> {
    const taskDate = DAY_INITIOUL[0];
    innerTime.innerText = taskDate;
}




const renderItems = ()=> {
    const taskList = DAY_INITIOUL[1];
    taskContainer.innerHTML = '';
    taskList.forEach(item=> {
    const taskTag = document.createElement('p');
    const taskContent = `${item.task} | ${item.duDate.start} - ${item.duDate.end}`;
    taskTag.classList.add('task-margin');
    taskTag.innerText = taskContent;
    taskContainer.append(taskTag);
})
}

renderItems();




// Get Value Date Input and rendering date From Input ------------------
taskDateID.addEventListener('change', ()=> {
    const dateValue = taskDateID.value;
    DAY_INITIOUL[0] = dateValue;
    renderDate();
})


const addNewTask = ()=> {
    const taskValue = taskBody.value;
    const duStartValue = duStart.value;
    const duEndValue = duEnd.value;

    const taskObj = {
        taskID : DAY_INITIOUL.length+1,
        task: taskValue,
        duDate: {
            start: duStartValue,
            end: duEndValue
        },
        done: false
    }

    DAY_INITIOUL[1].push(taskObj);
    renderItems();
    taskBody.value = '';
}
// On Add Button click Creating a obj and push it in DAY_INITIOUL then rerander it ...
addButton.addEventListener('click', addNewTask)