// AIzaSyAi66BlAlxseN2US63p3jLeWfPF4dur9Nk
// AIzaSyD-fCt0FgqKKmaOyw2IKw7NfRyRiWXkpaU

// const API_KEY = "AIzaSyD-fCt0FgqKKmaOyw2IKw7NfRyRiWXkpaU"

import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
// GOOGLE_API_KEY = AIzaSyD-fCt0FgqKKmaOyw2IKw7NfRyRiWXkpaU;
const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = "AIzaSyD-fCt0FgqKKmaOyw2IKw7NfRyRiWXkpaU";

async function runChat(prompt){
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
       model: MODEL_NAME
     });
     const generationConfig = {
      temperature: 0.9,
      topP: 1,
      topK: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
      category : HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold : HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
      {
      category : HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold : HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
      {
      category : HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold : HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
      {
      category : HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold : HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ]
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [

      ],
    });
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
}
export default runChat;



// google copy
// import { GoogleGenerativeAI } from "@google/generative-ai";
// GOOGLE_API_KEY = AIzaSyD-fCt0FgqKKmaOyw2IKw7NfRyRiWXkpaU
// ;

// const apiKey = process.env.AIzaSyD-fCt0FgqKKmaOyw2IKw7NfRyRiWXkpaU;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   const response = result.response;
//   console.log(response.text());
  
// }

// export default run;