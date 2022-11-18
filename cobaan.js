function closPath(number){
      let result = ''
      let lastDigit = number

      while( number!=0){
          lastDigit = Math.floor(number / 1000)
          if(lastDigit == 1){
            result += "I"
          }
          if(lastDigit == 4){
            result += "IV"
          }
          if(lastDigit == 5){
            result += "V"
          }
          if(lastDigit == 9){
            result += "IX"
          }
          if(lastDigit == 10){
            result += "X"
          }
          if(lastDigit == 40){
            result += "XL"
          }
          if(lastDigit == 50){
            result += "L"
          }
          if(lastDigit == 90){
            result += "XC"
          }
          if(lastDigit == 100){
            result += "C"
          }
          if(lastDigit == 400){
            result += "CD"
          }
          if(lastDigit == 500){
            result += "D"
          }
          if(lastDigit == 900){
            result += "CM"
          }
          if(lastDigit == 1000){
            result += "M"
          }
          number = Math.floor(number / 1000);
          number = number * 1000
        }
        return result
      }

  
  
  console.log(closPath(11));