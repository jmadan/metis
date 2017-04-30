
function RandomNumber(){
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

export const GenerateGUID = () => {
  // then to call it, plus stitch in '4' in the third group
 return (RandomNumber() + RandomNumber() + "-" + RandomNumber() + "-4" + RandomNumber().substr(0,3) + "-" + RandomNumber() + "-" + RandomNumber() + RandomNumber() + RandomNumber()).toLowerCase();
}
