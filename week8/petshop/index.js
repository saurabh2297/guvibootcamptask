var petArr = [];
var petsRecord = { "Dog": 0, "Cat": 0, "Parrot": 0, "Rabbit": 0 };
var reqArr = [];
var reqStatus = [];
var PetAvail = /** @class */ (function () {
    function PetAvail(petData) {
        this.type = petData.typeV;
        this.name = petData.nameV;
        this.age = petData.ageV;
        this.gender = petData.genderV;
        petsRecord[petData.typeV] += 1;
        petArr.push(petData);
    }
    return PetAvail;
}());
var PetReq = /** @class */ (function () {
    function PetReq() {
    }
    PetReq.prototype.insertReq = function (req) {
        if (req === void 0) { req = { "Dog": 0, "Cat": 0, "Parrot": 0, "Rabbit": 0 }; }
        reqArr.push(req);
    };
    PetReq.prototype.reqStatus = function () {
        for (var i = 0; i < reqArr.length; i++) {
            if (reqArr[i]['Dog'] > petsRecord['Dog'] || reqArr[i]['Cat'] > petsRecord['Cat'] || reqArr[i]['Parrot'] > petsRecord['Parrot'] || reqArr[i]['Rabbit'] > petsRecord['Rabbit']) {
                reqStatus.push(false);
            }
            else {
                reqStatus.push(true);
                petsRecord['Dog'] = petsRecord['Dog'] - reqArr[i]['Dog'];
                petsRecord['Cat'] = petsRecord['Cat'] - reqArr[i]['Cat'];
                petsRecord['Parrot'] = petsRecord['Parrot'] - reqArr[i]['Parrot'];
                petsRecord['Rabbit'] = petsRecord['Rabbit'] - reqArr[i]['Rabbit'];
            }
        }
        return reqStatus;
    };
    PetReq.prototype.req5Status = function () {
        return reqStatus.slice(0, 5);
    };
    return PetReq;
}());
var pet1 = new PetAvail({ typeV: "Dog", nameV: "Max", ageV: 5, genderV: 'Male' });
var pet2 = new PetAvail({ typeV: "Cat", nameV: "Puss", ageV: 5, genderV: 'Male' });
console.log(petsRecord);
console.log(petArr[0].typeV, petArr[0].nameV, petArr[0].genderV, petArr[0].ageV);
var req = new PetReq();
var req1 = req.insertReq({ 'Dog': 1, 'Cat': 0, 'Parrot': 0, 'Rabbit': 0 });
var req2 = req.insertReq({ 'Dog': 1, 'Cat': 1, 'Parrot': 0, 'Rabbit': 0 });
var req3 = req.insertReq({ 'Dog': 0, 'Cat': 1, 'Parrot': 0, 'Rabbit': 0 });
console.log(reqArr);
console.log(req.reqStatus());
console.log(req.req5Status());
