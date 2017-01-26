import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent {

  constructor(private projectService: ProjectService) { }

  submitForm(title, manager, teaser, description, moneyGoal, image, city, daysToGoal) {
    console.log(title, manager, teaser, description, moneyGoal, image, city, daysToGoal);
    var newProject: Project = new Project(title, manager, teaser, description, parseInt(moneyGoal), image, city, parseInt(daysToGoal), "string");
    console.log(newProject);
    this.projectService.addProject(newProject);
  }

}
