const updateCarhud = (velocity, fuel, isOnVehicle) => {
    let formattedVelocity = ('000' + Math.round(velocity)).substr(-3);
    let vehicleSpeed = Math.round(velocity) > 0 ? formattedVelocity : '000';
    let vehicleFuel = Math.round(fuel);
    isOnVehicle != null ? $('.container')[isOnVehicle ? 'fadeIn' : 'fadeOut']() : $('.container').hide();
    isOnVehicle ? $('.container > .velocity-container > .velocity-block:first-child > span').text(vehicleSpeed) : $('.container > .velocity-container > .velocity-block:first-child > span').text('000');
    isOnVehicle ? $('.container > .fuel-level > .fuel-level-flex > span').text(vehicleFuel) : $('.container > .fuel-level > .fuel-level-flex > span').text('N/A');
}