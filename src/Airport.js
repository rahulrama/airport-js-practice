'use strict'

function Airport(weather = new Weather()){
  // ECMA 6 ^typeof weather !== 'undefined' ? weather : new Weather()
  this._weather = weather
  this._hangar=[]
}

Airport.prototype.planes = function(){ return this._hangar}

Airport.prototype.clearForLanding = function(plane){
  if(this._weather.isStormy()){
    throw new Error('cannot land during storm')
  }
  this._hangar.push(plane)
}

Airport.prototype.clearForTakeOff = function(plane){
  if(this._weather.isStormy()){
    throw new Error('cannot takeoff during storm')
  }
  this._hangar.pop(plane)
}

Airport.prototype.isStormy = function(){
  return false
}
