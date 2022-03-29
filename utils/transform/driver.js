import { format } from "date-fns";

function transformDriver(drivers) {
    return drivers.map((driver) => {
        const date = new Date(driver.dob.date);
        const dob = format(date, 'dd-mm-yyyy');
        return {
            id: driver.id.value,
            firstName: driver.name.first,
            lastName: driver.name.last,
            phoneNumber: driver.phone.replace(/-/g, ''),
            email: driver.email,
            dob,
            picture: driver.picture.medium,
        }
    })
}

export default transformDriver;