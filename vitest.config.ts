import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    watch: false,
    cache: false,
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**'],
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
    },
  },
});
