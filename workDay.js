function addWorkdays(startDate, numWorkdays) {
    // Ensure startDate is a Date object
    if (!(startDate instanceof Date)) {
        throw new Error('startDate should be a Date object');
    }

    // Initialize a variable to track the added workdays
    let addedWorkdays = 0;

    // Loop until the desired number of workdays are added
    while (addedWorkdays < numWorkdays) {
        // Increment the date by one day
        startDate.setDate(startDate.getDate() + 1);

        // Check if the current day is a weekend (Saturday or Sunday)
        if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
            addedWorkdays++;
        }
    }

    return startDate;
}

// Example usage
const startDate = new Date('2023-08-18'); // Today's date
const numWorkdaysToAdd = 5; // Add 5 workdays

const newDate = addWorkdays(startDate, numWorkdaysToAdd);
console.log(newDate.toDateString()); // Output the new date after adding workdays
