const windchill = document.querySelector("#windchill")

function Windchill(speed, temp){
    let Windchill = Math.round((35.74+(0.6215*temp)-(35.75*speed^0.16)+(0.4275*temp*speed^0.16))*10)/10;
    return Windchill;
}

windchill.innerHTML = `Wind Chill: ${Windchill(9.5,49)}ºf`;