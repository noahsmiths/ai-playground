const API_URL = "https://api.openai.com/v1/completions";

class OpenAI {
    static query(prompt, key, options) {
        return new Promise((resolve, reject) => {
            fetch(API_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${key}`,
                },
                body: JSON.stringify({
                    prompt,
                    ...options,
                })
            })
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
        });
    }
}

export default OpenAI;