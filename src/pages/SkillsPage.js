import React from 'react';
import Header from '../components/Header';
import SkillsList from '../components/SkillsList';

function SkillsPage() {
  return (
    <div className="skills-page">
      <Header />
      <main>
        <SkillsList />
      </main>
    </div>
  );
}

export default SkillsPage;
