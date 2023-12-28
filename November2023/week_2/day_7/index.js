function Bicycle (cadences,speed,gear,tirepressure){
    this.cadences = cadences,
    this.speed = speed,
    this.gear = gear,
    this.tirepressure = tirepressure
    this.inflatetires = function (){
        this.tirepressure +=3
    }
}
var bicyle1 = new Bicycle (50,20,4,25)