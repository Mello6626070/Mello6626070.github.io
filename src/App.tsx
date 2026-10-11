import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import type { NavSection } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { SkillSection } from './components/SkillSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ContactSection } from './components/ContactSection';
import { MediaScrubberBar } from './components/MediaScrubberBar';
import { Footer } from './components/Footer';
import { projectsData } from './data/projects';
import type { ProjectItem } from './data/projects';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavSection>('projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4] flex flex-col font-sans selection:bg-[#f5c2e7] selection:text-[#11111b]">
      
      {/* Friendly Rounded Catppuccin Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      {/* Hero Section with Illustrated Moonscape & Floating Cloud Layers */}
      <HeroSection
        onNavigate={setActiveSection}
        onFilterDiscipline={(disc) => {
          setSelectedDiscipline(disc);
          setActiveSection('projects');
        }}
      />

      {/* Main Content Section Switcher */}
      <main className="flex-1">
        {activeSection === 'projects' && (
          <ProjectShowcase
            onSelectProject={handleSelectProject}
            selectedDiscipline={selectedDiscipline}
            onDisciplineChange={setSelectedDiscipline}
          />
        )}

        {activeSection === 'skills' && <SkillSection />}

        {activeSection === 'journey' && <RoadmapSection />}

        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Detailed Project Sketchbook Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}

      {/* Interactive Lo-Fi Audio Player / Scrubber Bar (from Inspiration Images) */}
      <MediaScrubberBar />

      {/* Cozy Sketchbook Footer */}
      <Footer />

    </div>
  );
};

export default App;
