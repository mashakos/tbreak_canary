export function ytParser(url){
  var regExp = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  var match = regExp.exec(url);
  console.log(match[3] + " " + regExp);
  return (match&&match[3].length==11)? match[3] : false;
}