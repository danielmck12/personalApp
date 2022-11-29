import capitalizeFirstLetter from "./CapitalizeFirstLetter";

export function formatForPath(str) {
   let strArr = str.toLowerCase().split(' ');

   for(let i=1;i<strArr.length;i++) {
      strArr[i] = capitalizeFirstLetter(strArr[i])
   }

   //console.log(strArr.join(''));
   return strArr.join('');
}

export function formatForTitle(str) {
   let pathFormatStr = str;

   //console.log(pathFormatStr)

   let strArr = pathFormatStr.split('');

   strArr.forEach((char, index, arr) => {
      if (char === char.toUpperCase()) {
         arr[index] = ' ' + arr[index];
      }

      if(index === 0) {
         arr[0] = arr[0].toUpperCase()
      }
   })

   /*console.log("FIRST : " + pathFormatStr)
   console.log(typeof pathFormatStr)
   console.log("SECOND : " + strArr)
   console.log("THIRD : " + strArr.join(''))*/

   return strArr.join('');
}