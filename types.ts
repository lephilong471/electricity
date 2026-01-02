export interface TimeSeriesData {
  date: string;
  value: number;
}

export interface MLEvaluationChartData {
  name: string;
  'Random Forest': number;
  'XGBoost': number;
}

// FIX: Changed interface to type to correctly use a mapped type.
// An interface cannot directly contain a mapped type like `[key in Metric]`.
export type FullMLEvaluationData = {
    [key in Metric]?: MLEvaluationChartData[];
};


export interface DLEvaluationData {
  model: string;
  value: number;
}

export type Metric = 'R2' | 'MAE' | 'RMSE';
export type Dataset = 'EPC' | 'HUEC' | 'ZEC';
export type ForecastConfig = '(IN=24, OUT=1)' | '(IN=48, OUT=1)' | '(IN=48, OUT=24)' | '(IN=96, OUT=24)' | '(IN=192, OUT=96)' | '(IN=336, OUT=96)' | '(IN=336, OUT=168)';

export interface DeepLearningData {
  [key: string]: { // Dataset
    [key: string]: { // ForecastConfig
      [key:string]: DLEvaluationData[] // Metric
    }
  }
}