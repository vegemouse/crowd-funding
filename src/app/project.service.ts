import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('/projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('/projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({category: localUpdatedProject.category,
                                title: localUpdatedProject.title,
                                manager: localUpdatedProject.manager,
                                teaser: localUpdatedProject.teaser,
                                description: localUpdatedProject.description,
                                moneyGoal: localUpdatedProject.moneyGoal,
                                image: localUpdatedProject.image,
                                city: localUpdatedProject.city,
                                daysToGoal: localUpdatedProject.daysToGoal});
  }
}
