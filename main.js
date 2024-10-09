const people=[
    {name:'Jaber',job:'nonGov',sallary:30000,id:1,address:{
        main:'Metsälinnunreitti 2'
    },hobby:['football','walking']},
    {name:'Kaber',job:'nonGov',sallary:140000,id:2,address:{
        main:'Metsälinnunreitti 2',
        current:'Espoo'
    }},
    {name:'Aaber',job:'Gov',sallary:20000,id:3,address:{
        main:'Metsälinnunreitti 3',
        current:'Helsinki'
    },hobby:['walking','singing']},
    {name:'Maber',job:'nonGov',sallary:50000,id:4,address:{
        main:'Metsälinnunreitti',
        current:'Espoo'
    },hobby:['fishing','cycling']},
    {name:'Saber',job:'Gov',sallary:35000,id:5,address:{
        main:'Metsälinnunreitti 4',
       
    },hobby:['dancing','drawing']},
    {name:'Taber',job:'Gov',sallary:25000,id:6,address:{
        main:'Metsälinnunreitti 6',
        current:'Vantaa'
    }},
    {name:'Qaber',job:'nonGov',sallary:90000,id:7},
]

const listParent=document.getElementById('person')
const showName=(obj)=>{
    obj.map((p)=>{
        const newList=document.createElement('li')
        newList.classList.add('cursor-pointer','font-bold','my-4')
        newList.innerText=p.name;
        listParent.appendChild(newList);

        newList.addEventListener('click',()=>{
            matchId(p.id)
        })
    })
    
}

const matchId=(id)=>{
    const getId=people.find((l)=>l.id==id)
    const personInfo=document.getElementById('info')
    personInfo.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-xl">
     <div class="card-body text-2xl font-bold">
    
        <p>Person Job- ${getId.job}</p>
        <p>Person Sallary- ${getId.sallary}</p>
        <p>Person Hobby- ${(getId?.hobby?.map((h)=>h)||'N/A')}</p>
        <p>Person Address- ${(getId?.address?.current||"N/A")}</p>

     </div>
    </div>
    `
    console.log(personInfo)
}

document.getElementById('denBtn').addEventListener('click',()=>{
    const newBtn=document.getElementById('btnContainer')
    newBtn.innerHTML=`
    <button class='btn' ${this.addEventListener('click',checkClick,false)}>Adopt</button>
    `
})

const checkClick=(evt)=>{
    evt.target.innerText="Adopted"
    evt.stopImmediatePropagation()
}

showName(people)