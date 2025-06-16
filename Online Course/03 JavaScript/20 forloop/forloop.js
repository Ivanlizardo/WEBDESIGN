const myH1 = document.getElementById("myH1");
let greetings = "Good morning!";

for (let i = 0; i < 20; i++) {
  myH1.textContent = `${i}. ${greetings}`;

  if (i == 13) {
    continue;
  } else if (i == 18) {
    break;
  } else {
    console.log(i);
  }
}
