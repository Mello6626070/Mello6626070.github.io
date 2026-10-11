import React, { useState } from 'react';
import { P3RNavbar } from './components/P3RNavbar';
import type { NavTab } from './components/P3RNavbar';
import { HeroSection } from './components/HeroSection';
import { OperationsGrid } from './components/OperationsGrid';
import { BriefingModal } from './components/BriefingModal';
import { SkillDeck } from './components/SkillDeck';
import { RoadmapView } from './components/RoadmapView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { projectsData } from './data/projects';
import type { ProjectOperation } from './data/projects';
import { profileData } from './data/profile';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('operations');
  const [selectedOperation, setSelectedOperation] = useState<ProjectOperation | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const handleSelectOperation = (op: ProjectOperation) => {
    setSelectedOperation(op);
  };

  const handleNextOperation = () => {
    if (!selectedOperation) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedOperation.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedOperation(projectsData[nextIndex]);
  };

  const handlePrevOperation = () => {
    if (!selectedOperation) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedOperation.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedOperation(projectsData[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#030914] text-slate-100 flex flex-col font-sans selection:bg-[#00f0ff] selection:text-black">
      
      {/* Persona 3 Reload Navigation Header (No Phone Top Bar) */}
      <P3RNavbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        statusText={profileData.headline}
      />

      {/* Hero Section */}
      <HeroSection
        onNavigate={setActiveTab}
        onFilterDiscipline={(disc) => {
          setSelectedDiscipline(disc);
          setActiveTab('operations');
        }}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {activeTab === 'operations' && (
          <OperationsGrid
            onSelectOperation={handleSelectOperation}
            selectedDiscipline={selectedDiscipline}
            onDisciplineChange={setSelectedDiscipline}
          />
        )}

        {activeTab === 'skills' && <SkillDeck />}

        {activeTab === 'roadmap' && <RoadmapView />}

        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Watch Dogs 2 Mission Briefing Modal (Screenshots 2 & 3) */}
      {selectedOperation && (
        <BriefingModal
          operation={selectedOperation}
          onClose={() => setSelectedOperation(null)}
          onNext={handleNextOperation}
          onPrev={handlePrevOperation}
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
