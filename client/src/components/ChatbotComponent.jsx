// src/components/ChatbotComponent.jsx
import { useEffect } from 'react';


const ChatbotComponent = () => {
    useEffect(() => {
        // Add the Botpress scripts to the document head
        const botpressScript = document.createElement('script');
        botpressScript.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
        botpressScript.async = true;
        document.head.appendChild(botpressScript);

        const botpressConfigScript = document.createElement('script');
        botpressConfigScript.src = 'https://files.bpcontent.cloud/2024/10/28/14/20241028143558-MUNOY32B.js';
        botpressConfigScript.async = true;
        document.head.appendChild(botpressConfigScript);

        return () => {
            // Cleanup scripts when the component unmounts
            document.head.removeChild(botpressScript);
            document.head.removeChild(botpressConfigScript);
        };
    }, []);

    return (
        <div className="chatbot-container">
            <button className="chatbot-button">Chat with us</button>
        </div>
    );
};

export default ChatbotComponent;
