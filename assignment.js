    //feetToMile

    function feetToMile(feet){
        var mile= feet*0.000189393939; //feetTo mile 
        return mile;
    }
        var result= feetToMile(105675);
        if (result<0){
            console.log("positive number");
            return 0;
        }
        
            console.log(result + " mile ");

    //woodcalculator
    
     
    function woodCalculator (chair,table,bed){
        var chairWood= 3*chair;
        var tableWood= 5*table;
        var bedWood=6*bed;
        var total= (chairWood+tableWood+bedWood);
        return total;
        
    }
    var result= woodCalculator(7,8,9);
    if(result<0){
        console.log("positive number");
    }
    console.log(result+ " cubic feet ");

    //Brick Calculator

    function brickCalculator(floor){
        var floorAbsolute = Math.abs(floor);
        if(floorAbsolute != floor){
            return "Enter your valid floor number";
        }else if(floor<=10){
            var smallBuildingFeet = floor * 15;
            var totalBrickForSmall = smallBuildingFeet * 1000;
            return totalBrickForSmall;
        }else if(floor>=11 && floor<=20){
            var topFloor = floor - 10;
            var belowTenFloor = floor - topFloor;
            var mediumBuildingFeet = belowTenFloor * 15 + topFloor * 12;
            var totalBrickForMedium = mediumBuildingFeet * 1000;
            return totalBrickForMedium;
    
        }else{
            var buildingTop = floor - 20;
            var buildingMiddle = 10;
            var buildingBottom = 10;
            var highBuildingFeet = buildingBottom * 15 + buildingMiddle * 12 + buildingTop * 10; 
            var totalBrickForHigh = highBuildingFeet * 1000;
            return totalBrickForHigh;
        }
    }
    
    var resultForBrickCalculator = brickCalculator(23);
    console.log(resultForBrickCalculator+ " Bricks ");



    //tinyFriend

        
     var listOfName = ["mark", "zuckerburg", "john", "leo"];
     var tinyFriendLength = 0;
    function tinyFriend(nameList){
        if(nameList == ""){
            return "distance cannot be negative ";
        }else{
                tinyFriendLength = nameList[0].length;
                for(var i=0; i<nameList.length; i++){
                    
                    if(nameList[i].length<tinyFriendLength){
                        tinyFriendLength = nameList[i].length;
                 }
                } 
            for(var j=0; j<nameList.length; j++){
              if(nameList[j].length == tinyFriendLength){
                  return nameList[j];
             }
         }
    }  
}
        
       var tinyFriendResult = tinyFriend(listOfName);
        console.log("Your Tiny Friend is :" + tinyFriendResult);