// rag.js

// Simple knowledge base
const knowledgeBase = [
  { id: 1, skill: "JavaScript Loops", content: "For loops iterate over a range. Example: for(let i=0;i<5;i++)" },
  { id: 2, skill: "JavaScript Arrays", content: "Arrays store multiple values. Example: const arr = [1,2,3]" },
];

// Fake embedding: just lowercase words as set for simple similarity
function embed(text) {
  return text.toLowerCase().split(" ");
}

// Simple cosine similarity (very naive)
function similarity(a, b) {
  const intersection = a.filter(word => b.includes(word));
  return intersection.length / Math.sqrt(a.length * b.length);
}

// RAG search function
// rag.js (snippet)
function retrieveRelevant(query) {
    const queryVec = embed(query);
    let best = { content: "General JavaScript knowledge" }; // Default fallback
    let bestScore = -1;
    
    for (const item of knowledgeBase) {
      const score = similarity(queryVec, embed(item.content));
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    }
    return best;
  }

module.exports = { retrieveRelevant };
