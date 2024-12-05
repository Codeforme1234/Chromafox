import React, { useState } from 'react';
import { Tabs, Button } from '@mantine/core';
import BrowserTab from './components/BrowserTab';
import ColorPicker from './components/ColorPicker';

const App = () => {
    const [tabs, setTabs] = useState([{ id: '1', url: '' }]);
    const [activeTab, setActiveTab] = useState('1');

    const addTab = () => {
        const newTab = { id: Date.now().toString(), url: '' };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
    };

    const updateTabUrl = (id, url) => {
        setTabs(tabs.map(tab => (tab.id === id ? { ...tab, url } : tab)));
    };

    return (
        <div>
            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Tab key={tab.id} value={tab.id}>
                            {tab.url || 'New Tab'}
                        </Tabs.Tab>
                    ))}
                    <Button onClick={addTab}>+</Button>
                </Tabs.List>

                {tabs.map((tab) => (
                    <Tabs.Panel key={tab.id} value={tab.id}>
                        <BrowserTab
                            tab={tab}
                            updateTabUrl={(url) => updateTabUrl(tab.id, url)}
                        />
                    </Tabs.Panel>
                ))}
            </Tabs>
            <ColorPicker />
        </div>
    );
};

export default App;
