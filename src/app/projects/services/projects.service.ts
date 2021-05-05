import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ProjectsService{
    projects = [
        {
          name: "Project one",
          image_link: "../../assets/img/one.jpg"
        },
        {
          name: "Project two",
          image_link: "../../assets/img/two.png"
        },
        {
          name: "Project three",
          image_link: "../../assets/img/three.webp"
        },
        {
          name: "Project four",
          image_link: "../../assets/img/four.png"
        },
        {
          name: "Project five",
          image_link: "../../assets/img/five.jpg"
        },
        {
          name: "Project six",
          image_link: "../../assets/img/five.jpg"
        },
        {
          name: "Project seven",
          image_link: "../../assets/img/one.jpg"
        }
      ];

      getProjects(){
          return this.projects;
      }
}