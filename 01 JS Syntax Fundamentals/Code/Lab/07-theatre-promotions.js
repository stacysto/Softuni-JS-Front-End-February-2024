function solve(typeOfDay, age) {
    let price;

    if (age >= 0 && age <= 18 && typeOfDay === 'Weekday') {
        price = 12;
        console.log(`${price}$`);
    } else if (age >18 && age <= 64 && typeOfDay === 'Weekday') {
        price = 18;
        console.log(`${price}$`);
    } else if (age > 64 && age <= 122 && typeOfDay === 'Weekday') {
        price = 12;
        console.log(`${price}$`);
    } else if (age >= 0 && age <= 18 && typeOfDay === 'Weekend') {
        price = 15;
        console.log(`${price}$`);
    } else if (age >18 && age <= 64 && typeOfDay === 'Weekend') {
        price = 20;
        console.log(`${price}$`);
    } else if (age > 64 && age <= 122 && typeOfDay === 'Weekend') {
        price = 15;
        console.log(`${price}$`);
    } else if (age >= 0 && age <= 18 && typeOfDay === 'Holiday') {
        price = 5;
        console.log(`${price}$`);
    } else if (age >18 && age <= 64 && typeOfDay === 'Holiday') {
        price = 12;
        console.log(`${price}$`);
    } else if (age > 64 && age <= 122 && typeOfDay === 'Holiday') {
        price = 10;
        console.log(`${price}$`);
    }else{
        console.log('Error!');
    }
    
}
solve('Holiday', -12);

