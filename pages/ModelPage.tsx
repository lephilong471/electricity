
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { modelInfo } from '../data/modelInfo';
import { ALL_MODELS } from '../constants';

const ModelPage: React.FC = () => {
  const { modelName } = useParams<{ modelName?: string }>();

  if (!modelName || !ALL_MODELS.includes(modelName)) {
    return <Navigate to="/" replace />;
  }

  const data = modelInfo[modelName];

  if (!data) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-accent">Model Information Not Found</h1>
        <p className="text-light-text-secondary dark:text-text-secondary">Sorry, we could not find any details for "{modelName}".</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-light-card dark:bg-card rounded-lg shadow-lg dark:shadow-glow border border-light-border dark:border-border p-8">
        <h1 className="text-4xl font-extrabold text-light-text-primary dark:text-text-primary mb-4">{modelName}</h1>
        <p className="text-lg text-light-text-secondary dark:text-text-secondary leading-relaxed mb-8">{data.description}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-light-text-primary dark:text-text-primary mb-4 border-b-2 border-light-primary dark:border-primary pb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-light-text-secondary dark:text-text-secondary">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-light-text-primary dark:text-text-primary mb-4 border-b-2 border-light-accent dark:border-accent pb-2">Common Use Cases</h2>
            <ul className="list-disc list-inside space-y-2 text-light-text-secondary dark:text-text-secondary">
              {data.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
