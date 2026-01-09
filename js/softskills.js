const tests = {
  communication: [
    {
      q: "You are introducing yourself in an interview. What is the best opening?",
      options: [
        "Tell personal life story in detail",
        "Briefly introduce your education and skills",
        "Say nothing until asked",
        "Talk about your friends"
      ],
      answer: 1
    },
    {
      q: "During a group discussion, what should you do?",
      options: [
        "Dominate the discussion",
        "Stay silent",
        "Listen and respond politely",
        "Interrupt others"
      ],
      answer: 2
    }
  ],

  interview: [
    {
      q: "HR asks: What are your strengths?",
      options: [
        "I don't know",
        "I am lazy but smart",
        "I mention skills relevant to job",
        "I avoid the question"
      ],
      answer: 2
    }
  ],

  confidence: [
    {
      q: "If you don't know an answer, you should:",
      options: [
        "Guess randomly",
        "Admit honestly and show willingness to learn",
        "Stay silent",
        "Blame college"
      ],
      answer: 1
    }
  ],

  team: [
    {
      q: "Your teammate makes mistake, you:",
      options: [
        "Insult publicly",
        "Ignore",
        "Help them improve",
        "Report to manager only"
      ],
      answer: 2
    }
  ]
};

let currentTest=[], index=0, score=0;

function startTest(type){
  currentTest = tests[type];
  index=0; score=0;
  testBox.style.display="block";
  loadQ();
}

function loadQ(){
  const q = currentTest[index];
  testTitle.innerText="Question "+(index+1);
  question.innerText=q.q;

  testBox.innerHTML = `
    <h2>Question ${index+1}</h2>
    <p>${q.q}</p>
    ${q.options.map((o,i)=>`<button onclick="check(${i})">${o}</button>`).join("")}
  `;
}

function check(ans){
  if(ans===currentTest[index].answer) score++;
  index++;
  if(index<currentTest.length) loadQ();
  else alert("Test Complete! Your Score: "+score+"/"+currentTest.length);
}
