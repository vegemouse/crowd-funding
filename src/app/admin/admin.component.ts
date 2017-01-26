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

  submitForm(category, title, manager, teaser, description, moneyGoal, image, city, daysToGoal) {

    if (category && title && manager && teaser && description && moneyGoal && image && city && daysToGoal) {
      var confirmed = confirm("Have you added all the benefits you want?");
      if (confirmed) {
        var newProject: Project = new Project(title, manager, teaser, description, moneyGoal, image, city, daysToGoal, category, this.newBenefits);
        this.projectService.addProject(newProject);
        console.log(newProject);
      }
    } else {
      alert("Please fill out all fields");
    }

  }

  submitBenefitForm(name, value, description) {
    if (name && value && description) {
      var newBenefit = new Benefit(name, value, description);
      this.newBenefits.push(newBenefit);
      console.log(this.newBenefits)
    } else {
      alert("Please fill out all benefit fields")
    }
  }

}
