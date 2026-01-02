import { DeepLearningData, FullMLEvaluationData } from '../types';

// Generate Time Series Data for Home Page with multiple models
export const generateTimeSeriesData = () => {
  const data = [];
  const startDate = new Date('2023-01-01');
  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    data.push({
      date: currentDate.toISOString().split('T')[0],
      'LSTM': Math.random() * 50 + 70 + Math.sin(i / 20) * 15,
      'Transformer': Math.random() * 40 + 60 + Math.sin(i / 30) * 25,
      'TSMixer': Math.random() * 60 + 80 + Math.sin(i / 25) * 10,
    });
  }
  return data;
};

// Mock Data for ML Evaluation Page
export const mlEvaluationData: FullMLEvaluationData = {
  'R2': [
    { name: 'EPC', 'Random Forest': 0.802, 'XGBoost': 0.809 },
    { name: 'HUEC', 'Random Forest': 0.843, 'XGBoost': 0.818 },
    { name: 'ZEC', 'Random Forest': 0.886, 'XGBoost': 0.887 },
  ],
  'MAE': [
    { name: 'HUEC', 'Random Forest': 5.543, 'XGBoost': 5.933 },
  ],
  'RMSE': [
    { name: 'HUEC', 'Random Forest': 7.034, 'XGBoost': 7.563 },
  ]
};

// Static data for EPC dataset
const epcData = {
  '(IN=24, OUT=1)': {
    'R2': [ { model: 'LSTM', value: 0.911 }, { model: 'Transformer', value: 0.889 }, { model: 'DB2-TransF', value: 0.872 }, { model: 'AutoFormer', value: 0.860 }, { model: 'TSMixer', value: 0.989 } ],
    'RMSE': [ { model: 'LSTM', value: 1405.549 }, { model: 'Transformer', value: 1569.183 }, { model: 'DB2-TransF', value: 1688.393 }, { model: 'AutoFormer', value: 1765.271 }, { model: 'TSMixer', value: 498.466 } ],
    'MAE': [ { model: 'LSTM', value: 999.677 }, { model: 'Transformer', value: 1321.302 }, { model: 'DB2-TransF', value: 1425.393 }, { model: 'AutoFormer', value: 1450.837 }, { model: 'TSMixer', value: 348.323 } ]
  },
  '(IN=48, OUT=1)': {
    'R2': [ { model: 'LSTM', value: 0.823 }, { model: 'Transformer', value: 0.990 }, { model: 'DB2-TransF', value: 0.844 }, { model: 'AutoFormer', value: 0.892 }, { model: 'TSMixer', value: 0.993 } ],
    'RMSE': [ { model: 'LSTM', value: 1982.429 }, { model: 'Transformer', value: 1489.702 }, { model: 'DB2-TransF', value: 1862.534 }, { model: 'AutoFormer', value: 1549.510 }, { model: 'TSMixer', value: 396.699 } ],
    'MAE': [ { model: 'LSTM', value: 1558.590 }, { model: 'Transformer', value: 1224.587 }, { model: 'DB2-TransF', value: 1519.809 }, { model: 'AutoFormer', value: 1205.889 }, { model: 'TSMixer', value: 278.183 } ]
  },
  '(IN=48, OUT=24)': {
    'R2': [ { model: 'LSTM', value: 0.789 }, { model: 'Transformer', value: 0.868 }, { model: 'DB2-TransF', value: 0.879 }, { model: 'AutoFormer', value: 0.877 }, { model: 'TSMixer', value: 0.975 } ],
    'RMSE': [ { model: 'LSTM', value: 2166.263 }, { model: 'Transformer', value: 1716.720 }, { model: 'DB2-TransF', value: 1643.386 }, { model: 'AutoFormer', value: 1658.296 }, { model: 'TSMixer', value: 750.457 } ],
    'MAE': [ { model: 'LSTM', value: 1780.850 }, { model: 'Transformer', value: 1351.045 }, { model: 'DB2-TransF', value: 1299.489 }, { model: 'AutoFormer', value: 1279.726 }, { model: 'TSMixer', value: 554.797 } ]
  },
  '(IN=96, OUT=24)': {
    'R2': [ { model: 'LSTM', value: 0.767 }, { model: 'Transformer', value: 0.874 }, { model: 'DB2-TransF', value: 0.909 }, { model: 'AutoFormer', value: 0.996 }, { model: 'TSMixer', value: 0.977 } ],
    'RMSE': [ { model: 'LSTM', value: 2284.013 }, { model: 'Transformer', value: 1680.800 }, { model: 'DB2-TransF', value: 1426.465 }, { model: 'AutoFormer', value: 281.227 }, { model: 'TSMixer', value: 716.839 } ],
    'MAE': [ { model: 'LSTM', value: 1866.113 }, { model: 'Transformer', value: 1343.362 }, { model: 'DB2-TransF', value: 1088.730 }, { model: 'AutoFormer', value: 215.765 }, { model: 'TSMixer', value: 522.364 } ]
  },
  '(IN=192, OUT=96)': {
    'R2': [ { model: 'LSTM', value: 0.621 }, { model: 'Transformer', value: 0.830 }, { model: 'DB2-TransF', value: 0.723 }, { model: 'AutoFormer', value: 0.892 }, { model: 'TSMixer', value: 0.950 } ],
    'RMSE': [ { model: 'LSTM', value: 2907.173 }, { model: 'Transformer', value: 1947.188 }, { model: 'DB2-TransF', value: 2483.002 }, { model: 'AutoFormer', value: 1554.819 }, { model: 'TSMixer', value: 1050.968 } ],
    'MAE': [ { model: 'LSTM', value: 2542.161 }, { model: 'Transformer', value: 1596.205 }, { model: 'DB2-TransF', value: 2252.752 }, { model: 'AutoFormer', value: 1256.979 }, { model: 'TSMixer', value: 817.983 } ]
  },
  '(IN=336, OUT=96)': {
    'R2': [ { model: 'LSTM', value: 0.697 }, { model: 'Transformer', value: 0.867 }, { model: 'DB2-TransF', value: 0.858 }, { model: 'AutoFormer', value: 0.944 }, { model: 'TSMixer', value: 0.968 } ],
    'RMSE': [ { model: 'LSTM', value: 2603.563 }, { model: 'Transformer', value: 1723.233 }, { model: 'DB2-TransF', value: 1784.489 }, { model: 'AutoFormer', value: 1122.495 }, { model: 'TSMixer', value: 849.977 } ],
    'MAE': [ { model: 'LSTM', value: 2214.274 }, { model: 'Transformer', value: 1393.003 }, { model: 'DB2-TransF', value: 1545.266 }, { model: 'AutoFormer', value: 802.661 }, { model: 'TSMixer', value: 706.788 } ]
  },
  '(IN=336, OUT=168)': {
    'R2': [ { model: 'LSTM', value: -0.117 }, { model: 'Transformer', value: 0.580 }, { model: 'DB2-TransF', value: 0.714 }, { model: 'AutoFormer', value: 0.883 }, { model: 'TSMixer', value: 0.826 } ],
    'RMSE': [ { model: 'LSTM', value: 4995.999 }, { model: 'Transformer', value: 3062.373 }, { model: 'DB2-TransF', value: 2528.886 }, { model: 'AutoFormer', value: 1615.907 }, { model: 'TSMixer', value: 1973.770 } ],
    'MAE': [ { model: 'LSTM', value: 4232.443 }, { model: 'Transformer', value: 2596.175 }, { model: 'DB2-TransF', value: 2166.936 }, { model: 'AutoFormer', value: 1359.150 }, { model: 'TSMixer', value: 1584.915 } ]
  }
};

// Static data for HUEC dataset
const huecData = {
    '(IN=24, OUT=1)': {
        'R2': [ { model: 'LSTM', value: 0.873 }, { model: 'Transformer', value: 0.876 }, { model: 'DB2-TransF', value: 0.884 }, { model: 'AutoFormer', value: 0.974 }, { model: 'TSMixer', value: 0.987 } ],
        'RMSE': [ { model: 'LSTM', value: 6.302 }, { model: 'Transformer', value: 6.237 }, { model: 'DB2-TransF', value: 6.031 }, { model: 'AutoFormer', value: 2.871 }, { model: 'TSMixer', value: 1.994 } ],
        'MAE': [ { model: 'LSTM', value: 4.871 }, { model: 'Transformer', value: 4.695 }, { model: 'DB2-TransF', value: 4.617 }, { model: 'AutoFormer', value: 2.157 }, { model: 'TSMixer', value: 1.419 } ]
    },
    '(IN=48, OUT=1)': {
        'R2': [ { model: 'LSTM', value: 0.823 }, { model: 'Transformer', value: 0.888 }, { model: 'DB2-TransF', value: 0.843 }, { model: 'AutoFormer', value: 0.953 }, { model: 'TSMixer', value: 0.988 } ],
        'RMSE': [ { model: 'LSTM', value: 7.435 }, { model: 'Transformer', value: 5.920 }, { model: 'DB2-TransF', value: 7.005 }, { model: 'AutoFormer', value: 3.842 }, { model: 'TSMixer', value: 1.912 } ],
        'MAE': [ { model: 'LSTM', value: 5.725 }, { model: 'Transformer', value: 4.449 }, { model: 'DB2-TransF', value: 5.203 }, { model: 'AutoFormer', value: 2.842 }, { model: 'TSMixer', value: 1.328 } ]
    },
    '(IN=48, OUT=24)': {
        'R2': [ { model: 'LSTM', value: 0.811 }, { model: 'Transformer', value: 0.766 }, { model: 'DB2-TransF', value: 0.810 }, { model: 'AutoFormer', value: 0.999 }, { model: 'TSMixer', value: 0.901 } ],
        'RMSE': [ { model: 'LSTM', value: 7.684 }, { model: 'Transformer', value: 8.547 }, { model: 'DB2-TransF', value: 7.690 }, { model: 'AutoFormer', value: 0.504 }, { model: 'TSMixer', value: 5.560 } ],
        'MAE': [ { model: 'LSTM', value: 5.711 }, { model: 'Transformer', value: 6.466 }, { model: 'DB2-TransF', value: 5.800 }, { model: 'AutoFormer', value: 0.257 }, { model: 'TSMixer', value: 4.079 } ]
    },
    '(IN=96, OUT=24)': {
        'R2': [ { model: 'LSTM', value: 0.816 }, { model: 'Transformer', value: 0.733 }, { model: 'DB2-TransF', value: 0.845 }, { model: 'AutoFormer', value: 0.999 }, { model: 'TSMixer', value: 0.903 } ],
        'RMSE': [ { model: 'LSTM', value: 7.566 }, { model: 'Transformer', value: 9.109 }, { model: 'DB2-TransF', value: 6.931 }, { model: 'AutoFormer', value: 0.554 }, { model: 'TSMixer', value: 5.496 } ],
        'MAE': [ { model: 'LSTM', value: 5.797 }, { model: 'Transformer', value: 6.931 }, { model: 'DB2-TransF', value: 5.172 }, { model: 'AutoFormer', value: 0.307 }, { model: 'TSMixer', value: 3.996 } ]
    },
    '(IN=192, OUT=96)': {
        'R2': [ { model: 'LSTM', value: 0.646 }, { model: 'Transformer', value: 0.415 }, { model: 'DB2-TransF', value: 0.761 }, { model: 'AutoFormer', value: 0.999 }, { model: 'TSMixer', value: 0.845 } ],
        'RMSE': [ { model: 'LSTM', value: 10.371 }, { model: 'Transformer', value: 13.327 }, { model: 'DB2-TransF', value: 8.518 }, { model: 'AutoFormer', value: 0.626 }, { model: 'TSMixer', value: 6.858 } ],
        'MAE': [ { model: 'LSTM', value: 8.094 }, { model: 'Transformer', value: 10.396 }, { model: 'DB2-TransF', value: 6.745 }, { model: 'AutoFormer', value: 0.462 }, { model: 'TSMixer', value: 5.119 } ]
    },
    '(IN=336, OUT=96)': {
        'R2': [ { model: 'LSTM', value: 0.697 }, { model: 'Transformer', value: 0.867 }, { model: 'DB2-TransF', value: 0.858 }, { model: 'AutoFormer', value: 0.944 }, { model: 'TSMixer', value: 0.968 } ],
        'RMSE': [ { model: 'LSTM', value: 2603.563 }, { model: 'Transformer', value: 1723.233 }, { model: 'DB2-TransF', value: 1784.489 }, { model: 'AutoFormer', value: 1122.495 }, { model: 'TSMixer', value: 849.977 } ],
        'MAE': [ { model: 'LSTM', value: 2214.274 }, { model: 'Transformer', value: 1393.003 }, { model: 'DB2-TransF', value: 1545.266 }, { model: 'AutoFormer', value: 802.661 }, { model: 'TSMixer', value: 706.788 } ]
    },
    '(IN=336, OUT=168)': {
        'R2': [ { model: 'LSTM', value: -0.176 }, { model: 'Transformer', value: 0.315 }, { model: 'DB2-TransF', value: 0.700 }, { model: 'AutoFormer', value: 0.981 }, { model: 'TSMixer', value: 0.821 } ],
        'RMSE': [ { model: 'LSTM', value: 18.853 }, { model: 'Transformer', value: 14.386 }, { model: 'DB2-TransF', value: 9.521 }, { model: 'AutoFormer', value: 2.402 }, { model: 'TSMixer', value: 7.346 } ],
        'MAE': [ { model: 'LSTM', value: 15.616 }, { model: 'Transformer', value: 10.713 }, { model: 'DB2-TransF', value: 7.700 }, { model: 'AutoFormer', value: 1.747 }, { model: 'TSMixer', value: 5.730 } ]
    }
};

// Static data for ZEC dataset
const zecData = {
    '(IN=24, OUT=1)': {
        'R2': [ { model: 'LSTM', value: 0.770 }, { model: 'Transformer', value: 0.759 }, { model: 'DB2-TransF', value: 0.754 }, { model: 'AutoFormer', value: 0.951 }, { model: 'TSMixer', value: 0.992 } ],
        'RMSE': [ { model: 'LSTM', value: 3887.422 }, { model: 'Transformer', value: 3979.786 }, { model: 'DB2-TransF', value: 4018.702 }, { model: 'AutoFormer', value: 1799.894 }, { model: 'TSMixer', value: 705.218 } ],
        'MAE': [ { model: 'LSTM', value: 2999.840 }, { model: 'Transformer', value: 3144.919 }, { model: 'DB2-TransF', value: 3157.367 }, { model: 'AutoFormer', value: 1433.738 }, { model: 'TSMixer', value: 543.172 } ]
    },
    '(IN=48, OUT=1)': {
        'R2': [ { model: 'LSTM', value: 0.813 }, { model: 'Transformer', value: 0.834 }, { model: 'DB2-TransF', value: 0.753 }, { model: 'AutoFormer', value: 0.976 }, { model: 'TSMixer', value: 0.995 } ],
        'RMSE': [ { model: 'LSTM', value: 3497.795 }, { model: 'Transformer', value: 3294.646 }, { model: 'DB2-TransF', value: 4017.939 }, { model: 'AutoFormer', value: 1243.326 }, { model: 'TSMixer', value: 565.438 } ],
        'MAE': [ { model: 'LSTM', value: 2741.833 }, { model: 'Transformer', value: 2563.605 }, { model: 'DB2-TransF', value: 3118.893 }, { model: 'AutoFormer', value: 971.760 }, { model: 'TSMixer', value: 433.516 } ]
    },
    '(IN=48, OUT=24)': {
        'R2': [ { model: 'LSTM', value: 0.629 }, { model: 'Transformer', value: 0.604 }, { model: 'DB2-TransF', value: 0.800 }, { model: 'AutoFormer', value: 0.999 }, { model: 'TSMixer', value: 0.930 } ],
        'RMSE': [ { model: 'LSTM', value: 4917.211 }, { model: 'Transformer', value: 5079.674 }, { model: 'DB2-TransF', value: 3611.382 }, { model: 'AutoFormer', value: 214.104 }, { model: 'TSMixer', value: 2135.654 } ],
        'MAE': [ { model: 'LSTM', value: 4042.972 }, { model: 'Transformer', value: 3836.849 }, { model: 'DB2-TransF', value: 2762.405 }, { model: 'AutoFormer', value: 120.348 }, { model: 'TSMixer', value: 1616.563 } ]
    },
    '(IN=96, OUT=24)': {
        'R2': [ { model: 'LSTM', value: 0.656 }, { model: 'Transformer', value: 0.656 }, { model: 'DB2-TransF', value: 0.804 }, { model: 'AutoFormer', value: 0.999 }, { model: 'TSMixer', value: 0.961 } ],
        'RMSE': [ { model: 'LSTM', value: 4740.505 }, { model: 'Transformer', value: 4738.832 }, { model: 'DB2-TransF', value: 3573.466 }, { model: 'AutoFormer', value: 201.927 }, { model: 'TSMixer', value: 1597.358 } ],
        'MAE': [ { model: 'LSTM', value: 3851.649 }, { model: 'Transformer', value: 3611.768 }, { model: 'DB2-TransF', value: 2696.911 }, { model: 'AutoFormer', value: 120.663 }, { model: 'TSMixer', value: 1155.246 } ]
    },
    '(IN=192, OUT=96)': {
        'R2': [ { model: 'LSTM', value: 0.582 }, { model: 'Transformer', value: 0.743 }, { model: 'DB2-TransF', value: 0.762 }, { model: 'AutoFormer', value: 0.947 }, { model: 'TSMixer', value: 0.943 } ],
        'RMSE': [ { model: 'LSTM', value: 5182.727 }, { model: 'Transformer', value: 4063.151 }, { model: 'DB2-TransF', value: 3913.366 }, { model: 'AutoFormer', value: 1853.107 }, { model: 'TSMixer', value: 1919.151 } ],
        'MAE': [ { model: 'LSTM', value: 4219.706 }, { model: 'Transformer', value: 3128.236 }, { model: 'DB2-TransF', value: 3004.799 }, { model: 'AutoFormer', value: 1459.893 }, { model: 'TSMixer', value: 1348.480 } ]
    },
    '(IN=336, OUT=96)': {
        'R2': [ { model: 'LSTM', value: 0.582 }, { model: 'Transformer', value: 0.678 }, { model: 'DB2-TransF', value: 0.730 }, { model: 'AutoFormer', value: 0.946 }, { model: 'TSMixer', value: 0.955 } ],
        'RMSE': [ { model: 'LSTM', value: 5144.029 }, { model: 'Transformer', value: 4515.221 }, { model: 'DB2-TransF', value: 4137.041 }, { model: 'AutoFormer', value: 1854.600 }, { model: 'TSMixer', value: 1689.218 } ],
        'MAE': [ { model: 'LSTM', value: 4152.355 }, { model: 'Transformer', value: 3466.967 }, { model: 'DB2-TransF', value: 3242.795 }, { model: 'AutoFormer', value: 1401.822 }, { model: 'TSMixer', value: 1133.003 } ]
    },
    '(IN=336, OUT=168)': {
        'R2': [ { model: 'LSTM', value: 0.582 }, { model: 'Transformer', value: 0.578 }, { model: 'DB2-TransF', value: 0.690 }, { model: 'AutoFormer', value: 0.955 }, { model: 'TSMixer', value: 0.940 } ],
        'RMSE': [ { model: 'LSTM', value: 5141.482 }, { model: 'Transformer', value: 5166.588 }, { model: 'DB2-TransF', value: 4427.909 }, { model: 'AutoFormer', value: 1679.310 }, { model: 'TSMixer', value: 1945.272 } ],
        'MAE': [ { model: 'LSTM', value: 4137.553 }, { model: 'Transformer', value: 4035.683 }, { model: 'DB2-TransF', value: 3333.610 }, { model: 'AutoFormer', value: 1340.266 }, { model: 'TSMixer', value: 1321.414 } ]
    }
};

export const dlEvaluationData: DeepLearningData = {
  'EPC': epcData as DeepLearningData['EPC'],
  'HUEC': huecData as DeepLearningData['HUEC'],
  'ZEC': zecData as DeepLearningData['ZEC'],
};