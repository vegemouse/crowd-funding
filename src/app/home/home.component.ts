import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit{
  projects: FirebaseListObservable<any[]>;
  filterByCategory: string = "";
  currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  };

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  };

  onChange(optionFromMenu) {
  this.filterByCategory = optionFromMenu;
}

}
