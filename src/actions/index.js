export const TEST_ACTION = 'TEST_ACTION';

/**
 * Set action
 *
 * @export
 * @param {any} selectedItem
 * @returns object
 */
export function setTestAction(selectedItem) {
  return { type: TEST_ACTION, selectedItem };
}
