// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
if (pickupLocation <= 42) {
    return 42 - pickupLocation;
}
else if (pickupLocation >= 42) {
    return pickupLocation - 42;
}
}

function distanceFromHqInFeet(pickupLocation) {
   
      let blocks = distanceFromHqInBlocks(pickupLocation) 
      return blocks * 264;
        
}

function distanceTravelledInFeet(start, destination) {

    let start1 = parseInt(start)
    let destination1 = parseInt(destination)

        if (start1 > destination1) {
            return (start1 - destination1) * 264
        }
        else return (destination1 - start1) * 264
}

function calculatesFarePrice(start, destination) {
    
   let distance = distanceTravelledInFeet(start, destination)
   let fare

   if (distance <= 400) {
   
       fare = 0
       return fare
       
   }
   else if (distance > 400, distance < 2000) {
       fare = (distance-400) * .02
       return fare
   }

   else if (distance > 2000, distance < 2500) {
    fare = 25
    return fare
}
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}