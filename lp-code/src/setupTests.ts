import "@testing-library/jest-dom/vitest";
import { vi } from 'vitest';

const matchMediaMock = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// Injeta o mock do matchMedia no ambiente de teste
Object.defineProperty(window, 'matchMedia', { writable: true, value: matchMediaMock });
Object.defineProperty(globalThis, 'matchMedia', { writable: true, value: matchMediaMock });