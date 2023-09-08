import '@testing-library/jest-dom'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// TODO: we can work on the coloring with redent package in the future
function splitClassNames(str: string) {
  if (!str) {
    return []
  }
  return str.split(/\s+/).filter((s) => s.length > 0)
}
function isSubset(subset: string[], superset: string[]) {
  return subset.every((item) => superset.includes(item))
}
expect.extend({
  toHaveExactClasses: (htmlElement: HTMLElement, expected: string[]) => {
    const receivedClassnames = splitClassNames(
      htmlElement!.getAttribute('class') ?? '',
    )

    const expectedClassnames = expected.reduce<string[]>(
      (acc, className) => acc.concat(className),
      [],
    )
    return {
      pass:
        isSubset(expectedClassnames, receivedClassnames) &&
        expected.length === receivedClassnames.length,
      message: () => {
        return `got: ${receivedClassnames} \nexpected: ${expectedClassnames}`
      },
    }
  },
})
