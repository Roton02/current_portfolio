import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaArrowLeft } from 'react-icons/fa';

const TechStack = ({ technologies }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Object.entries(technologies).map(([category, techs]) => (
      <div key={category} className="bg-tertiary p-4 rounded-xl">
        <h3 className="text-white font-semibold mb-3 capitalize">
          {category.replace(/([A-Z])/g, ' $1').trim()}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span key={tech} className="bg-white/10 px-2 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const FeatureList = ({ items, title }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-secondary mt-1">•</span>
          <span className="text-secondary">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('technical');
  const project = state?.project;

  if (!project) {
    navigate('/');
    return null;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'technical', label: 'Technical' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'future', label: 'Future Plans' },
  ];

  return (
    <div className="bg-primary min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={project.image}
          alt={project.name}
          className="w-full h-full  object-cover"
        />
        <div className="absolute inset-0 bg-black/70 bg-blend-overlay backdrop-blur-sm">
          <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-10">
            <button
              onClick={() => navigate('/')}
              className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
            >
              <FaArrowLeft /> Back
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-6">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
              >
                <FaGlobe /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                ${activeTab === tab.id ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'overview' && (
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-secondary">{project.overview}</p>
            </div>
          )}

          {activeTab === 'features' && (
            <FeatureList items={project.coreFeatures} title="Core Features" />
          )}

          {activeTab === 'technical' && (
            <div className="space-y-8">
              <TechStack technologies={project.technologiesUsed} />
              <FeatureList items={project.technicalDetails} title="Technical Implementation" />
            </div>
          )}

          {activeTab === 'challenges' && (
            <FeatureList items={project.majorChallenges} title="Major Challenges" />
          )}

          {activeTab === 'future' && (
            <FeatureList items={project.futurePlans} title="Future Plans" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;