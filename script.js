function showMessage() {
  const facts = [
    "Snakes can’t blink – they have a protective scale over their eyes.",
    "The longest snake ever recorded was over 33 feet!",
    "Some snakes give birth to live young instead of laying eggs.",
    "Snakes can go months without eating after a big meal.",
    "There are more than 3,000 species of snakes!"
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert("🐍 Snake Fact: " + randomFact);
}
