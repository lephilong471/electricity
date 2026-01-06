import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { dlEvaluationData } from '../data/mockData';
import { DATASETS, METRICS, FORECAST_CONFIGS, MODEL_COLORS, ALL_MODELS } from '../constants';
import { Metric, Dataset, ForecastConfig } from '../types';

interface ChartCardProps {
  dataset: Dataset;
}

const ChartCard: React.FC<ChartCardProps> = ({ dataset }) => {
  const availableConfigs = Object.keys(dlEvaluationData[dataset]) as ForecastConfig[];
  
  const [activeMetric, setActiveMetric] = useState<Metric>('R2');
  const [activeConfig, setActiveConfig] = useState<ForecastConfig>(availableConfigs[0]);

  const rawChartData = dlEvaluationData[dataset]?.[activeConfig]?.[activeMetric] ?? [];
  
  // Sort the data to ensure Random Forest and XGBoost appear first
  const chartData = [...rawChartData].sort((a, b) => {
    return ALL_MODELS.indexOf(a.model) - ALL_MODELS.indexOf(b.model);
  });

  return (
    <div className="bg-light-card dark:bg-card p-6 rounded-lg shadow-lg dark:shadow-glow border border-light-border dark:border-border">
      <h3 className="text-xl font-bold mb-4 text-light-text-primary dark:text-text-primary">{dataset} Dataset Analysis</h3>
      
      <div className="mb-4">
        <p className="font-semibold text-sm mb-2 text-light-text-secondary dark:text-text-secondary">Forecast Configuration:</p>
        <div className="flex flex-wrap gap-2">
          {FORECAST_CONFIGS.map(config => {
            const isAvailable = availableConfigs.includes(config);
            const isActive = activeConfig === config;
            return (
                <button
                key={config}
                onClick={() => isAvailable && setActiveConfig(config)}
                disabled={!isAvailable}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive && isAvailable
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-light-background dark:bg-background text-light-text-secondary dark:text-text-secondary'
                } ${
                    !isAvailable
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-light-border dark:hover:bg-border/50 hover:text-light-text-primary dark:hover:text-text-primary'
                }`}
                >
                {config}
                </button>
            );
          })}
        </div>
      </div>
      
      <div className="mb-6">
        <p className="font-semibold text-sm mb-2 text-light-text-secondary dark:text-text-secondary">Metric:</p>
        <div className="flex flex-wrap gap-2">
          {METRICS.map(metric => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                activeMetric === metric ? 'bg-accent text-white shadow-md' : 'bg-light-background dark:bg-background text-light-text-secondary dark:text-text-secondary hover:bg-light-border dark:hover:bg-border/50 hover:text-text-primary'
              }`}
            >
              {metric}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis type="category" dataKey="model" stroke="currentColor" tick={{ fill: 'currentColor', fontSize: 12 }} angle={-90} textAnchor="end" interval={0} />
            <YAxis type="number" stroke="currentColor" tick={{ fill: 'currentColor', fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg)',
                border: '1px solid var(--tooltip-border)',
              }}
              cursor={{fill: 'rgba(138, 63, 252, 0.1)'}}
              labelStyle={{ color: 'var(--tooltip-text)' }}
              itemStyle={{ color: 'var(--tooltip-text)' }}
            />
            <Bar dataKey="value" name={activeMetric}>
                <LabelList dataKey="value" position="top" fill="currentColor" fontSize={12} formatter={(value: number) => value.toFixed(2)} />
              {chartData.map((entry) => (
                <Cell key={`cell-${entry.model}`} fill={MODEL_COLORS[entry.model as keyof typeof MODEL_COLORS]} fillOpacity={0.8}/>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


const EvaluationPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-light-primary to-light-accent dark:from-primary dark:to-accent">
          Model Performance Evaluation
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-text-secondary">
          Comparative analysis of ML and DL models across various datasets.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {DATASETS.map(dataset => (
          <ChartCard key={dataset} dataset={dataset} />
        ))}
      </div>
    </div>
  );
};

export default EvaluationPage;