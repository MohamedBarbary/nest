type TUser= {
    id:number,
    username:string,
    role:'user'|'admin',
 }

type TTodo={
    userid:number,
    id :  number,
    todo:string,
} 


function getUserTodos(user:TUser){
    console.log(`fetching todo list , for user id ${user.id}`)
    return new Promise<TTodo []>((resolve,reject)=>{
       setTimeout(()=>{
       const todoList =[
        {
          userid:user.id,
          id:1,
          todo:'todo1'   
      },
        {
          userid:user.id,
          id:2,
          todo:'todo2'   
      }
    ];
    resolve(todoList);
       },4000)  
    });

}

function fetchUser (user:TUser){
    console.log('fetching user ...');
  return new Promise<TUser>((resolve,reject)=>{
       setTimeout(()=>{
        if(user.id>100){
            reject(new Error('unknown user id'));
        }else {
        resolve(user)
        }
       },3000)
  })
    
}

const user :TUser={
    id:10,
    username:"mohamed",
    role:"admin",
};

function onSuccess(user:TUser){
    return getUserTodos(user);
}
function onRejected(error:Error){
    console.error(error.message)
}

async function  getUserData () {
    try {
        const userData = await fetchUser(user);
        await onSuccess(userData);
    } catch (error) {
        console.log(error);
    }
   
}
getUserData();

function promisesRace(){
    const p1 = new Promise<string>((resolve, reject) => 
        setTimeout(resolve,500,'from promise 1')
    );
    const p2 = new Promise<string>((resolve, reject) => 
        setTimeout(reject,100,'from promise 2')
    );

    return Promise.race([p1,p2]);
}

promisesRace()
.then(
    data=>console.log(data),
    err=>console.log(err) 
)
promisesRace().then(console.log).catch(console.log);