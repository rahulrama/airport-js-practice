'use strict'

describe('Airport', function(){
  var airport
  var plane

  beforeEach(function(){
    airport = new Airport
    plane = jasmine.createSpy('plane')
  })

  it('has no planes by defailt', function(){
    expect(airport.planes()).toEqual([])
  })

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane)
    expect(airport.planes()).toContain(plane)
  })

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane)
    expect(airport.planes()).not.toContain(plane)
  })

  it('can check for stormy conditions', function(){
    expect(airport.isStormy().toBeFalsy)
  })

  describe('unders stormy conditions', function(){
    it('does not clear planes for takeoff', function(){
      spyOn(airport, 'isStormy').and.returnValue(true)
      expect(function(){airport.clearForTakeOff(plane)}).toThrowError('cannot takeoff during storm')
    })
  })
})
