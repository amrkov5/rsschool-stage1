function getParticipants(handshakes){
    if (handshakes === 0) return 0
    else return Math.ceil(((-1 + Math.sqrt(1+(8*handshakes)))/2)+1)
}
console.log(1/2)

getParticipants(38781)

// if (handshakes > 0) {
//     let participants = 2
//     handshakes--
//     return participants + Math.floor(handshakes/2)
// } else return 0