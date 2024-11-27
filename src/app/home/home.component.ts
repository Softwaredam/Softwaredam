import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service'
import { Project } from '../model/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  browseProject(project: number){
    this.projectService.browseProject(this.projects[project]);
  }
}


