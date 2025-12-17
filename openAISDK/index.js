import OpenAI from "openai";

let api_key =

const client = new OpenAI({
  apiKey: api_key,
});

client.responses
  .create({
    model: "gpt-go",
    input: "Write a one-sentence bedtime story about a unicorn.",
  })
  .then((res) => {
    console.log(res);
  });

