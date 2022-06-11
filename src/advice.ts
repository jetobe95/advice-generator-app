export default class Advice {
  constructor(public id: number, public advice: string) {}
  static fromJson(json: any): Advice {
    return new Advice(json.id, json.advice);
  }
}
