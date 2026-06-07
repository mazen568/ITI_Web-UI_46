// agent.js
const { GoogleGenerativeAI } = require("@google/generative-ai"); // Change this
const { retrieveRelevant } = require("./rag");
require("dotenv").config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

async function generateScenario(skill) {
  return `Complete this task for: ${skill}`;
}

async function evaluateAnswer(skill, userAnswer) {
  const context = retrieveRelevant(skill);
  const prompt = `
You are an evaluator.
Skill: ${skill}
Relevant info: ${context ? context.content : "No specific context found."}
User answer: ${userAnswer}

Evaluate the answer in 2-3 sentences and give a score 0-10.
`;

  // Gemini Syntax
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

async function coachNextStep(skill, score) {
  if (score >= 7) return `Great! Move to the next skill.`;
  else return `Focus more on ${skill}. Try simpler exercises first.`;
}

module.exports = { generateScenario, evaluateAnswer, coachNextStep };