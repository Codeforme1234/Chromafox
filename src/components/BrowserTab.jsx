import React, { useState } from 'react';
import { TextInput, Button, Paper } from '@mantine/core';

const BrowserTab = ({ tab, updateTabUrl }) => {
    const [url, setUrl] = useState(tab.url);

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        updateTabUrl(url);
    };

    return (
        <Paper p="md">
            <form onSubmit={handleUrlSubmit}>
                <TextInput
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                    rightSection={
                        <Button type="submit" size="xs">Go</Button>
                    }
                />
            </form>
            <iframe 
                src={url} 
                style={{ width: '100%', height: '80vh', marginTop: 10 }} 
                title={`frame-${tab.id}`}
            />
        </Paper>
    );
};

export default BrowserTab;
