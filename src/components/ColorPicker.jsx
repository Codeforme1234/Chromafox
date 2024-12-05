import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Button, Paper } from '@mantine/core';

const ColorPicker = () => {
    const [color, setColor] = useState('#FF5733');

    const handleColorChange = (updatedColor) => {
        setColor(updatedColor.hex);
    };

    const pickColor = async () => {
        const pickedColor = await window.electronAPI.pickColor();
        setColor(pickedColor || color);
    };

    return (
        <Paper p="md">
            <SketchPicker 
                color={color} 
                onChange={handleColorChange}
                disableAlpha={true}
            />
            <Button onClick={pickColor} fullWidth mt="md">
                Use Eye Dropper
            </Button>
            <div style={{ marginTop: 10 }}>Selected Color: {color}</div>
        </Paper>
    );
};

export default ColorPicker;
