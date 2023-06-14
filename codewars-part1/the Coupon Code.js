function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (typeof enteredCode != typeof correctCode) return false;
      if (enteredCode.toString() == correctCode.toString() && Date.parse(currentDate) <= Date.parse(expirationDate)) return true;
      return false
    }