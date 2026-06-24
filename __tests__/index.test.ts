import { describe, expect, test, vi } from 'vitest';
import Person from '../src/Person';

describe('Person name: Jim, gender: Male', () => {
  const name = 'Jim';
  const gender = 'Male';
  const person = new Person(name, gender);

  test(`Test name: ${name}`, () => {
    expect(person.name).toBe(name);
  });

  test(`Test gender: ${gender}`, () => {
    expect(person.gender).toBe(gender);
  });

  test(`introduction`, () => {
    expect(person.introduce()).toBe(`Hi, I am ${name}. I am ${gender}.`);
  });
});

describe('Person name: Jill, gender: Female', () => {
  const name = 'Jill';
  const gender = 'Female';
  const person = new Person(name, gender);

  test(`Test name: ${name}`, () => {
    expect(person.name).toBe(name);
  });

  test(`Test gender: ${gender}`, () => {
    expect(person.gender).toBe(gender);
  });

  test(`introduction`, () => {
    expect(person.introduce()).toBe(`Hi, I am ${name}. I am ${gender}.`);
  });
});

describe('index entrypoint', () => {
  test("logs Jim's introduction", async () => {
    vi.resetModules();
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await import('../src/index');

      expect(logSpy).toHaveBeenCalledOnce();
      expect(logSpy).toHaveBeenCalledWith('Hi, I am Jim. I am Male.');
    } finally {
      logSpy.mockRestore();
    }
  });
});
