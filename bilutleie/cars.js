// @ts-check
import { updateMyProperties, thingsWithId } from "../lib/Minos.js";

const cars = {
    "Ferrari Enzo": {
        name: "Ferrari Enzo",
        pricePerDay: 8000
    },
    "BMW 3series": {
        name: "BMW 3series",
        pricePerDay: 5000
    },
    "Mercedes Amg GT": {
        name: "Mercedes Amg GT",
        pricePerDay: 4000
    },
    "Mazda 3": {
        name: "Mazda 3",
        pricePerDay: 350
    },
    "Toyota Yaris": {
        name: "Toyota Yaris",
        pricePerDay: 500
    },
    "Hyondai I20": {
        name: "Hyondai I20",
        pricePerDay: 1800
    },
    "Audi A3": {
        name: "Audi A3",
        pricePerDay: 2100
    },
    "Tesla Model 3": {
        name: "Tesla Model 3",
        pricePerDay: 3000
    }
}


const web = updateMyProperties();


const { bestill, bestilling, bord, pic, dro, name,
    adress,
    phone,
    email,
    Dateofbirth,
    pickup,
    good, Bekreftese } = thingsWithId();

bestill.addEventListener("click", () => {
    /**
     * Hvis name.value === "" eller adress.value === "" osv.... eller good.value === "":
     *  ikke gjør noe (return)
     */

    if(name.value === ""||
    adress.value === ""||
    phone.value === ""||
    email.value === ""||
    Dateofbirth.value === ""||
    bord.value === ""||
    pickup.value === ""||
    pic.value === ""||
    dro.value === ""||
    good.value === ""){
alert("You have to fill in form.")
return
    }
    // bestilling.style.opacity = 1;
    const pris = cars[bord.value].pricePerDay;
    const diff = new Date(dro.value).getDate() - new Date(pic.value).getDate();
    const totalPris = Math.abs(pris*diff);


    console.log(`Total pris bli ${pris*diff}`);

        console.log(
        name.value,
        adress.value,
        phone.value,
        email.value,
        Dateofbirth.value,
        bord.value,
        pickup.value,
        pic.value,
        dro.value,
        good.value);
        Bekreftese.innerHTML = `
        
        <h2>Booking Confirmation</h2>
       
        <H3>Bookingnumber: 4892140</H3>
        <H4>Thanks for the booking! A email containing receipt has been sendt to you.</H4>

            <ul>
                <li>Name: ${name.value}</li>
                <li>Adress: ${adress.value}</li>
                <li>Phone: ${phone.value}</li>
                <li>Email: ${email.value}</li>
                <li>Date of birth: ${Dateofbirth.value}</li>
                <li>Selected car: ${bord.value}</li>
                <li>Pickup location: ${pickup.value}</li>
                <li>Pickup date: ${pic.value}</li>
                <li>Drop off date: ${dro.value}</li>
                <li>Price: ${pris*diff} NOK</li> 
                Bookings can be refuneded 24 hour before Pickup date.
            </ul>
        `;
})