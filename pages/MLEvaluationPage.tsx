
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
// FIX: Changed import from mlEvaluationData to dlEvaluationData and will transform it, as mlEvaluationData is not exported.
import { dlEvaluationData } from '../data/mockData';
import { ML_MODELS, MODEL_COLORS, DATASETS } from '../constants';

const MLEvaluationPage: React.FC = () => {
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

  // FIX: Transform dlEvaluationData to fit the chart's expected format for ML models.
  // The original implementation had a TypeScript error due to an index signature conflict.
  // This version uses `reduce` to correctly construct the data objects for the chart, resolving the type error.
  const chartData = DATASETS.map(dataset => {
    // Using a fixed forecast config as this page doesn't have selectors.
    // The ML model scores are the same for all configs in the mock data.
    const r2scores = dlEvaluationData[dataset]['(IN=24, OUT=1)']['R2'];
    
    const mlModelScores = ML_MODELS.reduce((acc, model) => {
      acc[model] = r2scores.find(item => item.model === model)?.value;
      return acc;
    }, {} as {[model: string]: number | undefined});

    return {
      name: dataset,
      ...mlModelScores
    };
  });
  
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-light-text-primary dark:text-text-primary">Machine Learning Model Evaluation (R2 Score)</h1>
      <p className="text-light-text-secondary dark:text-text-secondary -mt-6">Comparing model performance based on the R2 coefficient of determination.</p>
      
      <div className="w-full flex-1 bg-light-card dark:bg-card p-6 rounded-lg shadow-lg dark:shadow-glow border border-light-border dark:border-border">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="name" stroke="currentColor" tick={{ fill: 'currentColor', fontSize: 12 }} />
            <YAxis stroke="currentColor" tick={{ fill: 'currentColor', fontSize: 12 }} domain={[0, 1]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg)',
                border: '1px solid var(--tooltip-border)',
              }}
              cursor={{fill: 'rgba(138, 63, 252, 0.1)'}}
              labelStyle={{ color: 'var(--tooltip-text)' }}
              itemStyle={{ color: 'var(--tooltip-text)' }}
            />
            {/* FIX: Cast e.dataKey to string as handleLegendClick expects a string. The recharts type is broad, but in this context dataKey is always a string. */}
            <Legend 
              onClick={(e) => handleLegendClick(e.dataKey as string)}
              formatter={renderLegendText}
            />
            {ML_MODELS.filter(model => !inactiveModels.includes(model)).map(model => (
              <Bar 
                key={model} 
                dataKey={model} 
                fill={MODEL_COLORS[model as keyof typeof MODEL_COLORS]} 
                fillOpacity={0.8} 
              >
                <LabelList dataKey={model} position="top" fill="currentColor" fontSize={12} formatter={(value: number) => value.toFixed(3)} />
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MLEvaluationPage;