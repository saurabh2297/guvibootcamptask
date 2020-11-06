type animal = 'Dog'|'Cat'|'Parrot'|'Rabbit'

type sex = 'Male'|'Female'

interface petConfig{
    typeV: animal;
    nameV:string;
    ageV:number;
    genderV:sex;
}

let petArr:Array<petConfig> =[];
let petsRecord:object={"Dog":0,"Cat":0,"Parrot":0,"Rabbit":0};
let reqArr:Array<object>=[]
let reqStatus:Array<boolean> = []

class PetAvail{
    type:animal;
    name:string;
    age:number;
    gender: sex;

    constructor(petData:petConfig){
        this.type = petData.typeV;
        this.name = petData.nameV;
        this.age = petData.ageV;
        this.gender = petData.genderV;
        petsRecord[petData.typeV] += 1
        petArr.push(petData)
    } 
}

class PetReq{
    insertReq(req:object={"Dog":0,"Cat":0,"Parrot":0,"Rabbit":0}){
        reqArr.push(req);
    }

    reqStatus(){
        for(let i=0;i<reqArr.length;i++){
            if(reqArr[i]['Dog']>petsRecord['Dog'] || reqArr[i]['Cat']>petsRecord['Cat'] || reqArr[i]['Parrot']>petsRecord['Parrot'] || reqArr[i]['Rabbit']>petsRecord['Rabbit']){
                reqStatus.push(false)
            }
            else{
                reqStatus.push(true)
                petsRecord['Dog'] = petsRecord['Dog']-reqArr[i]['Dog']
                petsRecord['Cat'] = petsRecord['Cat']-reqArr[i]['Cat']
                petsRecord['Parrot'] = petsRecord['Parrot']-reqArr[i]['Parrot']
                petsRecord['Rabbit'] = petsRecord['Rabbit']-reqArr[i]['Rabbit']
            }
        }
        return reqStatus
    }

  req5Status(){
      return reqStatus.slice(0,5)
  }
}

let pet1 = new PetAvail({typeV:"Dog",nameV:"Max",ageV:5,genderV:'Male'})
let pet2 = new PetAvail({typeV:"Cat",nameV:"Puss",ageV:5,genderV:'Male'})
console.log(petsRecord)
console.log(petArr[0].typeV,petArr[0].nameV,petArr[0].genderV,petArr[0].ageV)
let req= new PetReq()
let req1 = req.insertReq({'Dog':1,'Cat':0,'Parrot':0,'Rabbit':0})
let req2 = req.insertReq({'Dog':1,'Cat':1,'Parrot':0,'Rabbit':0})
let req3 = req.insertReq({'Dog':0,'Cat':1,'Parrot':0,'Rabbit':0})
console.log(reqArr)
console.log(req.reqStatus())
console.log(req.req5Status())








