module.exports = function check(str, bracketsConfig) {
  let pust_mass;
  let zakr_brk=0;
  let otkr_brk=0;
    for(let i=0;i<bracketsConfig.length;i++){

      for(let j=0; j<str.length; j++){
      if(str[str.length-1]==bracketsConfig[i][0]){
        return false;
      }
        if(str[j]==bracketsConfig[i][0])
      {
          otkr_brk++;;
      }
      else
          zakr_brk++;
      }


  }
  if(otkr_brk==zakr_brk)
      return true;
    else return false;
}
