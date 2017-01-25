import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ProjectService]
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//
//
// export class ProjectComponent implements OnInit {
//   projectId: string;
//   projectToDisplay;
//
//   constructor(
//     private route: ActivatedRoute,
//     private location: Location,
//     private projectService: ProjectService
//   ) { }
//
//   ngOnInit() {
//     this.route.params.forEach((urlParameters) => {
//       this.projectId = urlParameters['id'];
//     });
//     this.projectToDisplay = this.projectService.getProjectById(this.projectId);
//
//   }
//
// }
