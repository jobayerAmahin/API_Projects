const people=[
    {name:'Jaber',job:'nonGov',sallary:40000,id:1,address:{
        main:'Metsälinnunreitti 2'
    }},
    {name:'Kaber',job:'nonGov',sallary:40000,id:2,address:{
        main:'Metsälinnunreitti 2',
        current:'Espoo'
    }},
    {name:'Aaber',job:'Gov',sallary:40000,id:3,address:{
        main:'Metsälinnunreitti 3',
        current:'Helsinki'
    }},
    {name:'Maber',job:'nonGov',sallary:40000,id:4,address:{
        main:'Metsälinnunreitti',
        current:'Espoo'
    }},
    {name:'Saber',job:'Gov',sallary:40000,id:5,address:{
        main:'Metsälinnunreitti 4',
       
    }},
    {name:'Taber',job:'Gov',sallary:40000,id:6,address:{
        main:'Metsälinnunreitti 6',
        current:'Vantaa'
    }},
    {name:'Qaber',job:'nonGov',sallary:40000,id:7},
]

const listParent=document.getElementById('person')
const showName=(obj)=>{
    const newList=document.createElement('li')
    newList.innerText=obj.map((p)=>p.name);

    listParent.appendChild(newList);
    console.log(newList)
}
showName(people)