import { Metric, Dataset, ForecastConfig } from './types';

export const ML_MODELS = ['Random Forest', 'XGBoost'];
export const DL_MODELS = ['LSTM', 'Transformer', 'DB2-TransF', 'AutoFormer', 'TSMixer'];
export const ALL_MODELS = [...ML_MODELS, ...DL_MODELS];

export const DATASETS: Dataset[] = ['EPC', 'HUEC', 'ZEC'];
export const METRICS: Metric[] = ['R2', 'MAE', 'RMSE'];
export const FORECAST_CONFIGS: ForecastConfig[] = [
  '(IN=24, OUT=1)',
  '(IN=48, OUT=1)',
  '(IN=48, OUT=24)',
  '(IN=96, OUT=24)',
  '(IN=192, OUT=96)',
  '(IN=336, OUT=96)',
  '(IN=336, OUT=168)',
];

export const MODEL_COLORS = {
  'Random Forest': '#00BFFF', // Deep Sky Blue
  'XGBoost': '#39FF14', // Neon Green
  'LSTM': '#F472B6', // Hot Pink
  'Transformer': '#8A3FFC', // Vibrant Purple
  'DB2-TransF': '#FFD700', // Gold
  'AutoFormer': '#FF5733', // Persimmon
  'TSMixer': '#00F5FF', // Bright Cyan
};