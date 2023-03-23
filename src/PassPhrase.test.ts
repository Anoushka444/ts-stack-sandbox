import { PassPhrase } from './PassPhrase';

describe("PassPhrase tests", () => {
  test("An empty phrase should have 0 length", () => {
    // 1. set up the state
    let myPhrase: PassPhrase = new PassPhrase("");

    // 2. invoke action
    let actual: number = myPhrase.length();

    // 3. assert expected outcome
    expect(actual).toBe(0);
  });

  test("Phrase with 12 characters has correct length", () => {
    let myPhrase: PassPhrase = new PassPhrase("CSCI 630 SDM");
    let actual: number = myPhrase.length();
    expect(actual).toBe(12);
  });
  test("is_caps_locked returns true for phrase with opposite case alphabetic characters", () => {
    let myPhrase: PassPhrase = new PassPhrase("HeLlO123");
    let actual: boolean = myPhrase.is_caps_locked("hElLo123");
    expect(actual).toBe(false);
  });
  test("has_mixed_case returns false for phrase with all upper-case", () => {
    let myPhrase: PassPhrase = new PassPhrase("HELLOWORLD");
    let actual: boolean = myPhrase.has_mixed_case();
    expect(actual).toBe(false);
  });
  test("has_mixed_case returns false for all upper-case phrase", () => {
    let myPhrase: PassPhrase = new PassPhrase("HELLO WORLD");
    let actual: boolean = myPhrase.has_mixed_case();
    expect(actual).toBe(false);
  });
})
