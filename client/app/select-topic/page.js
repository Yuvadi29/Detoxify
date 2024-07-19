"use client"

import { useState } from 'react';

const topics = ['DevOps', 'Rust', 'GoLang', 'React', 'Node.js'];

export default function SelectTopic() {
    const [selectedTopics, setSelectedTopics] = useState([]);

    const toggleTopic = (topic) => {
        setSelectedTopics((prev) =>
            prev.includes(topic)
                ? prev.filter((t) => t !== topic)
                : [...prev, topic]
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Select Topics of Interest</h1>
            <div className="grid grid-cols-2 gap-4">
                {topics.map((topic) => (
                    <div
                        key={topic}
                        className={`p-4 border rounded cursor-pointer ${selectedTopics.includes(topic) ? 'bg-blue-600 text-white' : 'bg-gray-600'
                            }`}
                        onClick={() => toggleTopic(topic)}
                    >
                        {topic}
                    </div>
                ))}
            </div>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Save Preferences
            </button>
        </div>
    );
}
