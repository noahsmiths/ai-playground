const BASE_API_URL = "https://api-inference.huggingface.co/models/";

class HuggingFaceAPI {
    static query(prompt, key, options) {
        return new Promise((resolve, reject) => {
            let parameters = {
                temperature: options.temperature,
                do_sample: options.do_sample,
                return_full_text: false
            };
            
            if (options.max_new_tokens_enabled) parameters.max_new_tokens = options.max_new_tokens;
            if (options.top_p_enabled) parameters.top_p= options.top_p;
            if (options.repetition_penalty_enabled) parameters.repetition_penalty = options.repetition_penalty;

            fetch(BASE_API_URL + options.model, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${key}`,
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters
                })
            })
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
        });
    }
}

export default HuggingFaceAPI;