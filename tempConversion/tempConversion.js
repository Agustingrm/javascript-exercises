const ftoc = function(numf) {
  return Math.round((numf-32)*5/9*10)/10
}

const ctof = function(numc) {
  return Math.round((numc*9/5+32)*10)/10;

}

module.exports = {
  ftoc,
  ctof
}
