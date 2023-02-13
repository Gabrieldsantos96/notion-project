import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/*.spec.ts'],
  preset: '@shelf/jest-mongodb'
}

export default config
