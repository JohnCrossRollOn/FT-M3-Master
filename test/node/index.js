const axios = require('axios');

axios.post("https://strengthlevel.com/", "gender=male&ageyears=19&bodymass=64&bodymassunit=kg&exercise=deadlift&liftmass=130&liftmassunit=kg&repetitions=1&timezone=-3&source=homepage")
.then(response=>console.log(response), error=> console.log(error.code))