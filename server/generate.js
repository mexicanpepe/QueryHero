import openaiClient from "./api.js";

const generate = async (input) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert the following natural language into an answer: \n\n${input}.`,
    max_tokens: 100,
    temperature: 0
  })

  return response.data.choices[0].text
}

export default generate;