export class Project {
  public benefits: Object[];
  public moneyRaised: number;

  constructor (public title: string, public manager: string, public teaser: string, public description: string, public moneyGoal: number, public image: string, public city: string, public daysToGoal: number, public category: string) { 
    this.benefits = [];
    this.moneyRaised = 0;
  }
}
