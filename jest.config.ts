import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['lcov'],
  coverageDirectory: './coverage/',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'ts-jest-resolver',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', './test-utils', __dirname, './src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  snapshotResolver: '<rootDir>/snapshot.resolver.js',
}

export default config
