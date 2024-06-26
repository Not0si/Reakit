import type { Config } from 'jest'

export default async (): Promise<Config> => {
  //
  return {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  }
}
