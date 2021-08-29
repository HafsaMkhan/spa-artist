// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';

jest.setTimeout(30 * 1000);

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({
    artist: 'A',
  }),
}));

module.exports = {
  setupFiles: ['<rootDir>/src/setupTests.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{test.js,test.jsx,test.tsx}',
    'page/**/*.{test.js,test.jsx,test.tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
};
