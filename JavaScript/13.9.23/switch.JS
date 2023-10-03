let today = new Date();
switch(today.getDay()){
case 0:
    document.write("Today is Sunday we serve Chicken.");
    break;

case 1:
    document.write("Today is Monday we serve Pasta.");
    break;

case 2:
    document.write("Today is Tuesday we serve Beef.");
    break;

case 3:
    document.write("Today is Wednesday we serve Pizza.");
    break;

case 4:
    document.write("Today is Thursday we serve Fish.");
    break;

case 5:
    document.write("Today is Friday we serve Tofu.");
    break;

case 6:
    document.write("Today is Saturday we serve Hamin.");
    break;
    default:
        alert ("No Day Today.")
}
