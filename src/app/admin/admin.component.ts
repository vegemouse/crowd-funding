import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Benefit } from '../benefit.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent {

  constructor(private projectService: ProjectService) { }

  newBenefits: Benefit[] = [];
  // newBenefit: Benefit;

  submitForm(title, manager, teaser, description, moneyGoal, image, city, daysToGoal, benefitName, benefitValue, benefitDescription) {

    var newBenefit = new Benefit(benefitName, benefitValue, benefitDescription);


    this.newBenefits.push(newBenefit);

    var newProject: Project = new Project(title, manager, teaser, description, parseInt(moneyGoal), image, city, parseInt(daysToGoal), "category", this.newBenefits);

    this.projectService.addProject(newProject);
    console.log(newProject);
  }

}
