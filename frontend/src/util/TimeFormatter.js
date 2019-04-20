export default class TimeFormatter {
  constructor() {}

  getHuman(time) {
    const humanTime = time.replace('T', '-').split('-');
    return `${humanTime[1]}/${humanTime[2]}/${humanTime[0]}`;
  }
}