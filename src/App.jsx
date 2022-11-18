import { useEffect, useState, useRef } from 'react';
import defaultSettings from './config/default-model-settings.json';

import OpenAI from './scripts/open-ai-api';
import HuggingFaceAPI from './scripts/hugging-face-api';

import Settings from './components/Settings';

import GPT3 from './components/model_settings_pages/GPT3';
import GPTNEO from './components/model_settings_pages/GPTNEO';
import GPTJ from './components/model_settings_pages/GPTJ';
import Bloom from './components/model_settings_pages/Bloom';

import ModelResponse from './components/model_response_pages/ModelResponse';

const App = () => {
    const [activeTab, setActiveTab] = useState(+localStorage.getItem("active-tab") || 1);
    const [queryInProgress, setQueryInProgress] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const queryInput = useRef();

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
    }, [openAIKey]);

    useEffect(() => {
        localStorage.setItem("hugging-face-key", huggingFaceKey);
    }, [huggingFaceKey]);

    const insertModelResponse = (text, modelName) => {
        let i = 0;

        while(text.charAt(i) == '\n') {
            let lineBreak = document.createElement("br");
            queryInput.current.appendChild(lineBreak);
            i++;
        }

        let span = document.createElement("span");
        span.setAttribute("beforetext", `[${modelName} Start] `);
        span.setAttribute("aftertext", ` [End]`);
        span.className = `before:text-purple-500 before:content-[attr(beforetext)] after:text-purple-500 after:content-[attr(aftertext)]`;
        span.contentEditable = "plaintext-only";
        span.innerText = text.slice(i);
        queryInput.current.appendChild(span);

        let empty = document.createTextNode( '\uFEFF' );
        queryInput.current.appendChild(empty);
    }

    const queryCurrentModel = () => {
        if (queryInProgress) return;

        setQueryInProgress(true);

        switch(activeTab) {
            case 1: // GPT-3
                OpenAI.query(queryInput.current.innerText, openAIKey, gpt3Settings)
                    .then((data) => {
                        let returnText = data.choices[0].text;

                        if (returnText.length === 0) {
                            setAlertMessage("GPT-3 returned nothing as a stop sequence was reached.");
                        } else {
                            insertModelResponse(returnText, "GPT-3");
                        }
                    })
                    .catch((err) => {
                        setAlertMessage("Error in OpenAI request. Check console for more details.");
                        console.error(err);
                    })
                    .finally(() => {
                        setQueryInProgress(false);
                    });
                break;
            case 2: // GPT-NEO
                HuggingFaceAPI.query(queryInput.current.innerText, huggingFaceKey, gptNeoSettings)
                    .then((data) => {
                        if (data.length === 0) {
                            setAlertMessage("No data returned. Please try again.");
                        } else {
                            let returnText = data[0].generated_text;

                            if (returnText.length === 0) {
                                setAlertMessage("GPT-NEO returned an empty string. A stop sequence may have been reached.");
                            } else {
                                // queryInput.current.innerText += returnText;
                                insertModelResponse(returnText, "GPT-NEO");
                            }
                        }
                    })
                    .catch((err) => {
                        setAlertMessage("Error in Hugging Face request. Check console for more details.");
                        console.error(err);
                    })
                    .finally(() => {
                        setQueryInProgress(false);
                    });
                break;
            case 3: // GPT-J
                HuggingFaceAPI.query(queryInput.current.innerText, huggingFaceKey, gptJSettings)
                    .then((data) => {
                        if (data.length === 0) {
                            setAlertMessage("No data returned. Please try again.");
                        } else {
                            let returnText = data[0].generated_text;

                            if (returnText.length === 0) {
                                setAlertMessage("GPT-J returned an empty string. A stop sequence may have been reached.");
                            } else {
                                insertModelResponse(returnText, "GPT-J");
                            }
                        }
                    })
                    .catch((err) => {
                        setAlertMessage("Error in Hugging Face request. Check console for more details.");
                        console.error(err);
                    })
                    .finally(() => {
                        setQueryInProgress(false);
                    });
                break;
            case 4: // Bloom
                HuggingFaceAPI.query(queryInput.current.innerText, huggingFaceKey, bloomSettings)
                    .then((data) => {
                        if (data.length === 0) {
                            setAlertMessage("No data returned. Please try again.");
                        } else {
                            let returnText = data[0].generated_text;

                            if (returnText.length === 0) {
                                setAlertMessage("Bloom returned an empty string. A stop sequence may have been reached.");
                            } else {
                                insertModelResponse(returnText.indexOf(queryInput.current.innerText) === 0 ? returnText.replace(queryInput.current.innerText, "") : returnText , "Bloom");
                            }
                        }
                    })
                    .catch((err) => {
                        setAlertMessage("Error in Hugging Face request. Check console for more details.");
                        console.error(err);
                    })
                    .finally(() => {
                        setQueryInProgress(false);
                    });
                break;
        }
    }

    const queryAllModels = () => {
        
    }

    const [editable, setEditable] = useState(false);

    // const handleKeyUp = (e) => {
    //     if (e.target == e.currentTarget) setEditable(false);
    //     let range = document.createRange();//Create a range (a range is a like the selection but invisible)
    //     range.selectNodeContents(e.target);//Select the entire contents of the element with the range
    //     range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    //     let selection = window.getSelection();//get the selection object (allows you to change selection)
    //     selection.removeAllRanges();//remove any selections already made
    //     selection.addRange(range);
    // }

    const lockSpans = (e) => {
        // alert(e.target == e.currentTarget);
        // /* if (e.target == e.currentTarget) */ setEditable(e.target != e.currentTarget);
        
    }

    return (
        <>
            <div id="container" className="grid grid-span-rows grid-cols-12 gap w-screen h-screen">
                <div ref={queryInput} id="test" placeholder="Write your query here." contentEditable={!editable && "plaintext-only"} className="transition-all bg-base-200 border hover:border-primary focus:border-primary-focus col-span-8 m-2 rounded p-4 outline-none before:empty:content-[attr(placeholder)] before:empty:text-gray-500 overflow-auto" onMouseDown={lockSpans}>
                    {/* <ModelResponse color="text-purple-500" text="Hello there!" editable={editable} setEditable={setEditable} /> */}
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
                            <button className="btn btn-primary w-full" disabled={queryInProgress}>Query all</button>
                        </div>
                        <div className="w-2/5 pr-2">
                            <button className="btn btn-primary w-full" onClick={queryCurrentModel} disabled={queryInProgress}>Query selected model</button>
                        </div>
                        <div className="w-1/5">
                            <label htmlFor="settings-modal" className="btn w-full">Settings</label>
                        </div>
                    </div>
                </div>
                <div className="toast toast-start cursor-pointer" onClick={() => { setAlertMessage("") }}>
                    <div className={`alert alert-warning ${alertMessage.length == 0 && 'hidden'}`}>
                        <div>
                            <span>{alertMessage}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Settings openAI={{openAIKey, setOpenAIKey}} huggingFace={{huggingFaceKey, setHuggingFaceKey}}/>
        </>
    )
}

export default App;
