const Settings = ({openAI, huggingFace}) => {
    const { openAIKey, setOpenAIKey } = openAI;
    const { huggingFaceKey, setHuggingFaceKey } = huggingFace;

    const resetModels = () => {
        if (confirm("Are you sure you want to reset all model settings?")) {
            localStorage.removeItem("gpt3Settings");
            localStorage.removeItem("gptNeoSettings");
            localStorage.removeItem("gptJSettings");
            localStorage.removeItem("bloomSettings");

            window.location.reload();
        }
    }

    return (
        <>
            <input type="checkbox" id="settings-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Settings</h3>
                    <div className="flex flex-col">
                        <label className="label">
                            <span className="label-text-lg">OpenAI API Key</span>
                            <span className="label-text-lg"><button className="text-accent hover:text-accent-focus" onClick={() => { window.open("https://beta.openai.com/account/api-keys"); }}>Get One Here</button></span>
                        </label>
                        <input type="text" placeholder="Enter key" className="input input-bordered input-primary w-full" value={openAIKey} onChange={(e) => { setOpenAIKey(e.target.value); }} />
                        <label className="label">
                            <span className="label-text-lg">Huggingface API Key</span>
                            <span className="label-text-lg"><button className="text-accent hover:text-accent-focus" onClick={() => { window.open("https://huggingface.co/settings/tokens"); }}>Get One Here</button></span>
                        </label>
                        <input type="text" placeholder="Enter key" className="input input-bordered input-primary w-full" value={huggingFaceKey} onChange={(e) => { setHuggingFaceKey(e.target.value); }}/>
                    </div>
                    <button className="btn btn-warning mt-4 w-full" onClick={resetModels}>Reset all model options to Defaults</button>
                    <div className="modal-action">
                        <label htmlFor="settings-modal" className="btn btn-primary w-full">Done</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;