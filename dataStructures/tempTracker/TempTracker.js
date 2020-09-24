class TempTracker {
  constructor() {
    this.temps = [];
    // For max/min
    this.maxTemp = null;
    this.minTemp = null;

    // For mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.meanTemp = null;

    // For mode
    this.occurrences = new Array(111).fill(0); // Array of 0s at indices 0..110
    this.maxOccurrences = 0;
    this.modeTemp = null;
  }

  // records a new temperature
  insert(temperature) {
    if (this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    }

    // For mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.meanTemp = this.totalSum / this.numberOfReadings;

    // For mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
      this.modeTemp = temperature;
      this.maxOccurrences = this.occurrences[temperature];
    }

    this.temps.push(temperature);
  }

  // returns the highest temp we've seen so far
  getMax() {
    return this.maxTemp;
  }

  // returns the lowest temp we've seen so far
  getMin() {
    return this.minTemp;
  }

  // returns the mean ↴ of all temps we've seen so far
  getMean() {
    return this.meanTemp;
  }

  // returns a mode ↴ of all temps we've seen so far
  getMode() {
    return this.modeTemp;
  }
}

module.exports = TempTracker;
