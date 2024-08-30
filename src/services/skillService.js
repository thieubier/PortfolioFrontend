import { API_BASE_URL } from './api';

export async function fetchSkills() {
  const response = await fetch(`${API_BASE_URL}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return await response.json();
}

export async function fetchSkillById(id) {
  const response = await fetch(`${API_BASE_URL}/skills/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch skill with ID ${id}`);
  }
  return await response.json();
}

export async function createSkill(skill) {
  const response = await fetch(`${API_BASE_URL}/skills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(skill),
  });
  if (!response.ok) {
    throw new Error('Failed to create skill');
  }
  return await response.json();
}

export async function deleteSkill(id) {
  const response = await fetch(`${API_BASE_URL}/skills/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete skill with ID ${id}`);
  }
  return await response.json();
}
