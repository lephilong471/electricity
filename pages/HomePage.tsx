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
    <div className="w-full h-full flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-light-primary to-light-accent dark:from-primary dark:to-accent">
          Model Performance Visualization
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-text-secondary">
          Visualize and compare the performance of advanced forecasting models over time.
        </p>
      </div>
      
      <div className="w-full flex-1 bg-light-card dark:bg-card p-6 rounded-lg shadow-lg dark:shadow-glow border border-light-border dark:border-border">
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
  );
};

export default HomePage;