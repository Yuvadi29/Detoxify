"use client";

import AuthContext from '@/context/AuthContext';
import axios from '../../utils/axios';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const topics = [
    'DevOps', 'Rust', 'GoLang', 'React', 'Node.js', 'NextJs', 'Angular',
    'MERN', 'Docker', 'Kubernetes', 'Python', 'Java', 'C#', 'Swift',
    'Flutter', 'TypeScript', 'Vue.js', 'Svelte', 'GraphQL', 'Tailwind CSS',
    'Firebase', 'AWS', 'Azure', 'GCP', 'Machine Learning', 'Data Science',
    'Blockchain', 'Cybersecurity', 'Mobile Development', 'Game Development',
    'AR/VR', 'CI/CD', 'Microservices', 'Serverless', 'APIs', 'WebAssembly',
    'Quantum Computing', 'Big Data', 'IoT', 'AI', 'ElasticSearch',
    'Redux', 'Sass', 'Webpack', 'Babel', 'Electron', 'Unity', 'Unreal Engine'
];


const SelectTopic = () => {
    const [selectedTopics, setSelectedTopics] = useState([]);
    const { user } = useContext(AuthContext);
    const router = useRouter();

    const toggleTopic = (topic) => {
        setSelectedTopics((prev) =>
            prev.includes(topic)
                ? prev.filter((t) => t !== topic)
                : [...prev, topic]
        );
    };

    const savePreferences = async () => {
        if (!user) {
            alert('Please login to save your preferences');
            return;
        }
        try {
            await axios.post('/topics/select', { topics: selectedTopics });
            alert('Preferences saved Successfully');
            router.push('/');
        } catch (error) {
            console.log("Failed to save Preferences: ", error);
        }
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 flex justify-center items-center">Select Topics of Interest</h1>
            <div className="container mx-auto p-4 flex-1 flex justify-center items-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {topics.map((topic) => (
                        <Button
                            key={topic}
                            variant="outline"
                            className={`p-4 border rounded-lg cursor-pointer text-lg font-semibold transition-all duration-200 ${selectedTopics.includes(topic) ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md'
                                }`}
                            onClick={() => toggleTopic(topic)}
                        >
                            {topic}
                        </Button>
                    ))}
                </div>
            </div>
            <Button
                onClick={savePreferences}
                className="mt-6 px-6 py-3 flex justify-center ml-[35rem] items-center text-white rounded-lg shadow-md transition-all"
            >
                Save Preferences
            </Button>
        </>
    );
};

export default SelectTopic;
