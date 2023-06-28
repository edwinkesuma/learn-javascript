console.log("Hello world!");

console.error("Alert");

console.warn("Warning");

console.table({ name: "edwin", email: "edwinkesuma@mail.com" });

const x = 100;

console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background: white; color: green;";

console.log("%cHello World", styles);
