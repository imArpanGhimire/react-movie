import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
    { id: "movies", label: "Movies" },
    { id: "shows", label: "TV shows" },

];

const AnimatedTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1 text-red-600 bg-neutral-900 p-2 rounded-full">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition
            ${activeTab === tab.id ? "text-black" : "text-red-500 hover:text-red-700"}`}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-0 bg-gray-500"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
                        />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};

export default AnimatedTabs;
