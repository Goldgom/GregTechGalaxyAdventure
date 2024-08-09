GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('vacuum_filter', 'simple', GTValues.LV, GTValues.MV, GTValues.HV) 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('vacuum_filter')
        .tankScalingFunction(tier => tier * 3200)
    event.create('fluid_cooler', 'simple', GTValues.LV, GTValues.MV, GTValues.HV) 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fluid_cooler')
        .tankScalingFunction(tier => tier * 3200)
    event.create('fluid_bubbler', 'simple', GTValues.LV, GTValues.MV, GTValues.HV) 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fluid_bubbler')
        .tankScalingFunction(tier => tier * 3200)
})