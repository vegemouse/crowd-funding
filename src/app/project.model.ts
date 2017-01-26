import { Benefit } from './benefit.model'

export class Project {
  public moneyRaised: number;

  constructor (public title: string, public manager: string, public teaser: string, public description: string, public moneyGoal: number, public image: string, public city: string, public daysToGoal: number, public category: string, public benefits: Benefit[]) {
    this.moneyRaised = 0;
  }
}
