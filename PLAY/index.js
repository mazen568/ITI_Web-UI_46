// index.js
const { generateScenario, evaluateAnswer, coachNextStep } = require("./agent");

async function main() {
  const skill = "JavaScript Loops";

  // 1️⃣ Generate scenario
  const scenario = await generateScenario(skill);
  console.log("Scenario:", scenario);

  // 2️⃣ Fake user answer
  const userAnswer = "I can write a for loop to print numbers 0 to 4.";

  // 3️⃣ Evaluate
  const evaluationText = await evaluateAnswer(skill, userAnswer);
  console.log("Evaluation:", evaluationText);

  // 4️⃣ Parse score (simple regex)
  const scoreMatch = evaluationText.match(/(\d+)/);
  const score = scoreMatch ? parseInt(scoreMatch[1]) : 5;

  // 5️⃣ Coach next step
  const advice = await coachNextStep(skill, score);
  console.log("Coach Advice:", advice);
}

main();
