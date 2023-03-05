$('.carhud').hide()
window.addEventListener('load', () =>
    window.addEventListener('message', (event) => 
        event.data.type === 'update' && updateCarhud(event.data.velocity, event.data.fuel, event.data.isOnVehicle)
    )
)