const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it.skip('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it.skip('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles 12:00 - midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  describe('Handles hourly times', () => {
    it('should convert 2:00 to two o clock', () => {
      const timeInWords = convertTimeToWords('2:00');
      expect(timeInWords).toBe("two o'clock");
    });
  });

  describe('Handles times before :30', () => {
    it('should convert 2:03 to three past two', () => {
      const timeInWords = convertTimeToWords('2:03');
      expect(timeInWords).toBe("three past two");
    });
  })

  describe('Handles times after :30',  () => {
    it('should convert 2:33 to twenty seven to three', () => {
      const timeInWords = convertTimeToWords('2:33');
      expect(timeInWords).toBe("twenty seven to three");
    });
  });

  // - '0:00' > 'midnight'
  // - '12:00' > 'midday'
  // - '2:00' > 'two o'clock'
  // - '2:03' > 'three past two'
  // - '2:11' > 'eleven past two'
  // - '2:15' > 'quarter past two'
  // - '2:30' > 'half past two'
  // - '2:33' > 'twenty seven to three'
  // - '2:40' > 'twenty to three'
  // - '2:45' > 'quarter to three'
  // - '2:55' > 'five to three'
});
