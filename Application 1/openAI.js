 //OpenAI API key
    
    const apiKey ='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';

   
// function make request to OpenAI

async function openAIRequest(prompt){
    const response = await fetch('https://api.openai.com/v1/completions',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${apiKey}`
        },
        body:JSON.stringify({
            prompt:prompt,
            max_tokens: 50
        })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
    }
    const prompt = "How can I integrate OpenAI in my code using JavaScript?";
    openAIRequest(prompt).then(response =>{
        console.log(response);
    })
    .catch(error =>{
        console.error(error);
    });