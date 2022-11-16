import { useEffect, useState } from 'react';
import defaultSettings from './config/default-model-settings.json';

import Settings from './components/Settings';

import GPT3 from './components/model_settings_pages/GPT3';
import GPTNEO from './components/model_settings_pages/GPTNEO';
import GPTJ from './components/model_settings_pages/GPTJ';
import Bloom from './components/model_settings_pages/Bloom';

const App = () => {
    const [activeTab, setActiveTab] = useState(+localStorage.getItem("active-tab") || 1);

    const [gpt3Settings, setGpt3Settings] = useState(JSON.parse(localStorage.getItem("gpt3Settings")) || defaultSettings.gpt3);
    const [gptNeoSettings, setGptNeoSettings] = useState(JSON.parse(localStorage.getItem("gptNeoSettings")) || defaultSettings.gptneo);
    const [gptJSettings, setGptJSettings] = useState(JSON.parse(localStorage.getItem("gptJSettings")) || defaultSettings.gptneo);
    const [bloomSettings, setBloomSettings] = useState(JSON.parse(localStorage.getItem("bloomSettings")) || defaultSettings.bloom);

    const [openAIKey, setOpenAIKey] = useState(localStorage.getItem("open-ai-key") || "");
    const [huggingFaceKey, setHuggingFaceKey] = useState(localStorage.getItem("hugging-face-key") || "");

    // useEffect(() => {
    //     localStorage.getItem("gpt3Settings")
    // }, []);
    useEffect(() => {
        localStorage.setItem("active-tab", activeTab);
    }, [activeTab]);

    useEffect(() => {
        localStorage.setItem("gpt3Settings", JSON.stringify(gpt3Settings));
    }, [gpt3Settings]);

    useEffect(() => {
        localStorage.setItem("gptNeoSettings", JSON.stringify(gptNeoSettings));
    }, [gptNeoSettings]);

    useEffect(() => {
        localStorage.setItem("gptJSettings", JSON.stringify(gptJSettings));
    }, [gptJSettings]);

    useEffect(() => {
        localStorage.setItem("bloomSettings", JSON.stringify(bloomSettings));
    }, [bloomSettings]);

    useEffect(() => {
        localStorage.setItem("open-ai-key", openAIKey);
    });

    useEffect(() => {
        localStorage.setItem("hugging-face-key", huggingFaceKey);
    });

    return (
        <>
            <div id="root" className="grid grid-span-rows grid-cols-12 gap w-screen h-screen">
                <div placeholder="Write your query here." contentEditable="true" className="transition-all bg-base-200 border hover:border-primary focus:border-primary-focus col-span-8 m-2 rounded p-4 outline-none before:empty:content-[attr(placeholder)] before:empty:text-gray-500">
                </div>
                <div className="flex flex-col col-span-4 mt-2 mb-2 pr-2 w-full overflow-auto">
                    <div className="flex flex-row justify-evenly tabs tabs-boxed w-full mb-2 border rounded">
                        <a className={`transition-all w-1/4 tab ${activeTab === 1 && 'tab-active'}`} onClick={() => { setActiveTab(1); }}>GPT-3</a>
                        <a className={`transition-all w-1/4 tab ${activeTab === 2 && 'tab-active'}`} onClick={() => { setActiveTab(2); }}>GPT-NEO</a>
                        <a className={`transition-all w-1/4 tab ${activeTab === 3 && 'tab-active'}`} onClick={() => { setActiveTab(3); }}>GPT-J</a>
                        <a className={`transition-all w-1/4 tab ${activeTab === 4 && 'tab-active'}`} onClick={() => { setActiveTab(4); }}>Bloom</a>
                    </div>

                    <div className="flex flex-col h-full w-full border rounded bg-base-200 p-4 overflow-auto">
                        { activeTab === 1 && <GPT3 settings={gpt3Settings} updateSettings={setGpt3Settings} /> }
                        { activeTab === 2 && <GPTNEO settings={gptNeoSettings} updateSettings={setGptNeoSettings} /> }
                        { activeTab === 3 && <GPTJ settings={gptJSettings} updateSettings={setGptJSettings} /> }
                        { activeTab === 4 && <Bloom settings={bloomSettings} updateSettings={setBloomSettings} /> }
                    </div>

                    <div className="flex flex-row mt-2 justify-between w-full p gap">
                        <div className="w-2/5 pr-2">
                            <button className="btn btn-primary w-full">Query all</button>
                        </div>
                        <div className="w-2/5 pr-2">
                            <button className="btn btn-primary w-full">Query selected model</button>
                        </div>
                        <div className="w-1/5">
                            <label htmlFor="settings-modal" className="btn w-full">Settings</label>
                        </div>
                    </div>
                </div>
            </div>
            <Settings openAI={{openAIKey, setOpenAIKey}} huggingFace={{huggingFaceKey, setHuggingFaceKey}}/>
        </>
    )
}

export default App;
