
interface ModelInfo {
  description: string;
  features: string[];
  useCases: string[];
}

export const modelInfo: Record<string, ModelInfo> = {
  'Random Forest': {
    description: 'An ensemble learning method that operates by constructing a multitude of decision trees at training time. For regression tasks, the mean or average prediction of the individual trees is returned.',
    features: [
      'High accuracy and robust to outliers.',
      'Handles non-linear relationships well.',
      'Provides feature importance rankings.',
      'Less prone to overfitting than a single decision tree.'
    ],
    useCases: [
      'Stock market prediction',
      'Demand forecasting',
      'Weather prediction',
      'Energy consumption forecasting'
    ]
  },
  'XGBoost': {
    description: 'An optimized distributed gradient boosting library designed to be highly efficient, flexible, and portable. It implements machine learning algorithms under the Gradient Boosting framework.',
    features: [
      'Excellent predictive performance.',
      'Handles missing data.',
      'Regularization to prevent overfitting.',
      'Parallel and distributed computing for speed.'
    ],
    useCases: [
      'Sales forecasting',
      'Financial modeling',
      'Resource demand planning',
      'Customer behavior prediction'
    ]
  },
  'LSTM': {
    description: 'Long Short-Term Memory networks are a type of recurrent neural network (RNN) capable of learning long-term dependencies. They are well-suited to classifying, processing and making predictions based on time series data.',
    features: [
      'Effectively captures long-term dependencies in sequential data.',
      'Mitigates the vanishing gradient problem of standard RNNs.',
      'Can model complex non-linear patterns.',
      'Stateful nature allows it to remember information over long periods.'
    ],
    useCases: [
      'Natural language processing',
      'Speech recognition',
      'Complex time-series prediction (e.g., stock prices)',
      'Anomaly detection in network traffic'
    ]
  },
  'Transformer': {
    description: 'A novel network architecture based on a self-attention mechanism, which dispenses with recurrence and convolutions entirely. It is highly parallelizable and has set new standards in sequence-to-sequence tasks.',
    features: [
      'Self-attention mechanism captures global dependencies.',
      'Highly parallelizable, leading to faster training times.',
      'Positional encodings to incorporate sequence order.',
      'State-of-the-art performance in NLP and increasingly in time-series.'
    ],
    useCases: [
      'Machine translation',
      'Text summarization',
      'Time-series forecasting with long-range dependencies',
      'Video analysis and understanding'
    ]
  },
  'DB2-TransF': {
    description: 'A specialized Transformer-based model designed for time-series forecasting, potentially incorporating domain-specific features or architectural tweaks to improve performance on temporal data.',
    features: [
      'Adapts Transformer architecture for time-series.',
      'May use specific techniques for handling trends and seasonality.',
      'Focuses on attention mechanisms for temporal patterns.',
      'Combines benefits of deep learning with attention.'
    ],
    useCases: [
      'Multivariate time-series forecasting',
      'Long-term demand prediction',
      'Economic forecasting',
      'Traffic flow prediction'
    ]
  },
  'AutoFormer': {
    description: 'A novel time-series Transformer with an auto-correlation mechanism. It breaks the pre-processing of series into sub-series, making it more efficient and effective at discovering period-based dependencies.',
    features: [
      'Auto-Correlation mechanism instead of self-attention.',
      'Achieves state-of-the-art accuracy with O(L log L) complexity.',
      'Efficient for very long sequence forecasting.',
      'Progressive decomposition of time series.'
    ],
    useCases: [
      'Long-term energy consumption forecasting',
      'Weather and climate prediction',
      'Economic indicator forecasting over long horizons',
      'Traffic data analysis'
    ]
  },
  'TSMixer': {
    description: 'A simple yet effective architecture for time-series forecasting based on Multi-Layer Perceptrons (MLPs). It mixes information across both time steps and features, challenging the need for complex models like Transformers.',
    features: [
      'Lightweight and computationally efficient.',
      'MLP-based architecture is easy to implement and train.',
      'Performs mixing across both temporal and feature dimensions.',
      'Competitive performance against more complex models.'
    ],
    useCases: [
      'Rapid prototyping of forecasting models',
      'Short-to-medium term forecasting',
      'Multivariate time-series where feature interaction is key',
      'Resource-constrained environments'
    ]
  }
};
