export class PassPhrase {
    private _phrase: string;

    // initializes the pass phrase
    constructor(initial: string) {
        this._phrase = initial;
    }

    // returns the number of characters in the phrase
    length(): number {
        return this._phrase.length;
    }

    // checks to see if the provided attempt is the equivalent to the phrase
    // but with all alphabetic characters in the opposite case of what they
    // are supposed to be (i.e. 'A' is 'a', 'a' is 'A', etc.) and returns
    // whether it is an exact match of the phrase besides all opposite case
    // alphabetic characters
    is_caps_locked(attempt: string): boolean {
        return false;
    }

    // returns whether the phrase has both at least one upper-case letter and
    // at least one lower-case letter
    has_mixed_case(): boolean {
        return false;
    }

    // determines how many times the same character is used at the beginning
    // of the phrase, before any other characters are used. The count should
    // be case sensitive so "Zzz" should only return 1
    count_starting_characters(): number {
        let repetition: number = 1;
        let index: number = 0;

        while( index < this._phrase.length-1 && 
               this._phrase.charAt(index) === this._phrase.charAt(index+1) ) {
            repetition++;
            index++;
        }
        return repetition;
    }


} // end of PassPhrase class
