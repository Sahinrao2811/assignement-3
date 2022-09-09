const users = [
  { name: "Raj", age: 25 },
  { name: "Mukesh", age: 33 },
  { name: "Amita", age: 55 },
  { name: "Yash", age: 22 },
];

let count = 1;
for (let i = 0; i <= users.length - 1; i++) {
  var x = document.querySelector(".info_txt");
  const div1 = document.createElement("div");
  const p1 = document.createElement("p");
  p1.innerText = `${users[i].name}`;
  const p2 = document.createElement("p");
  p2.innerText = `${users[i].age}`;
  const p3 = document.createElement("p");
  p3.innerText = `${count}`;
  div1.appendChild(p3);
  div1.appendChild(p1);
  div1.appendChild(p2);
  x.appendChild(div1);
  div1.style = "display: flex ;justify-content :space-between ;align-items: center;margin-right: 50px;"
  count++;
}
