const promise1= new Promise((resolve,reject)=>{
    console.log("Tulee Tänne")
    const x=true
    setTimeout(()=>{
        if(!x){
            resolve("Niin Oikein")
        }
        else{
            reject("Väärin valitettavasti")
        }
    },3000)
})

const getPromise=async()=>{
    try{
        const finalPromise=await promise1
        console.log(finalPromise)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log('Viimeinen Kertaa')
    }
}
getPromise()

const bulkPromise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hyväksyä 1")
    },2000)
})

const bulkPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hyväksyä 2")
    },2000)
})

const bulkPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hyväksyä 3")
    },2000)
})

// bulkPromise1
// .then((response)=>{
//     console.log(response)
//     bulkPromise2
//     .then((response)=>{
//         console.log(response)
//         bulkPromise3
//         .then((response)=>{
//             console.log(response)
//         })
//     })
// })

const bulkPromiseGet=async()=>{
    const [b1,b3,b2]=await Promise.all([bulkPromise1,bulkPromise3,bulkPromise2])
    console.log(b1,b3,b2)
}
bulkPromiseGet()