import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { generateTimeSeriesData } from '../data/mockData';
import { MODEL_COLORS } from '../constants';

const timeSeriesData = generateTimeSeriesData();
const modelsToPlot = ['LSTM', 'Transformer', 'TSMixer'];

const HomePage: React.FC = () => {
  const [inactiveModels, setInactiveModels] = useState<string[]>([]);

  const handleLegendClick = (dataKey: string) => {
    if (inactiveModels.includes(dataKey)) {
      setInactiveModels(inactiveModels.filter((key) => key !== dataKey));
    } else {
      setInactiveModels([...inactiveModels, dataKey]);
    }
  };

  const renderLegendText = (value: string, entry: any) => {
    const { color } = entry;
    const isInactive = inactiveModels.includes(value);
    return (
      <span style={{ color: isInactive ? '#A0A0A0' : color, cursor: 'pointer' }}>
        {value}
      </span>
    );
  };
  
  return (
    <div className="relative w-full h-full flex flex-col gap-8 rounded-lg overflow-hidden -m-4 p-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://videos.pexels.com/video-files/3187652/3187652-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-light-background/50 dark:bg-background/70 z-10"></div>
        
        <div className="relative z-20 w-full h-full flex flex-col gap-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-light-text-primary dark:text-text-primary text-center pt-8">Model Performance Over Time</h1>
            <div className="w-full flex-1 h-[70vh] bg-light-card/80 dark:bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg dark:shadow-glow border border-light-border dark:border-border">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={timeSeriesData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                        <XAxis dataKey="date" stroke="currentColor" tick={{ fill: 'currentColor', fontSize: 12 }} />
                        <YAxis stroke="currentColor" tick={{ fill: 'currentColor', fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'var(--tooltip-bg)',
                                border: '1px solid var(--tooltip-border)',
                            }}
                            labelStyle={{ color: 'var(--tooltip-text)' }}
                            itemStyle={{ color: 'var(--tooltip-text)' }}
                        />
                        {/* FIX: Cast e.dataKey to string as handleLegendClick expects a string. The recharts type is broad, but in this context dataKey is always a string. */}
                        <Legend 
                            onClick={(e) => handleLegendClick(e.dataKey as string)}
                            formatter={renderLegendText}
                        />
                        <Brush dataKey="date" height={30} stroke={MODEL_COLORS.Transformer} fillOpacity={0.1} />
                        {modelsToPlot.map(model => (
                            <Line 
                                key={model}
                                type="monotone" 
                                dataKey={model} 
                                stroke={MODEL_COLORS[model as keyof typeof MODEL_COLORS]}
                                strokeWidth={2} 
                                dot={false} 
                                activeDot={{ r: 8 }}
                                hide={inactiveModels.includes(model)}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
};

export default HomePage;