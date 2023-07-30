/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // 절대경로를 src로 인식하도록 설정 tsconfig.json파일에 baseUrl을 src로 했으면 적용
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};