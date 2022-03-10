import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-sigle-user-page',
  templateUrl: './sigle-user-page.component.html',
  styleUrls: ['./sigle-user-page.component.scss']
})
export class SigleUserPageComponent implements OnInit {

  user?: User;

  posts?: Post[];

  constructor(private connServ: ConnectionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idS = this.route.snapshot.paramMap.get("id");
    let id = 0
    if (idS) {
      id = parseInt(idS)
    }
    this.connServ.getUser(id).subscribe(userData => this.user = userData)
  }


  loadPosts(){
    if (this.user) {
      this.connServ.getPostsOfUser(this.user.id).subscribe(
        data =>{
          this.posts = [];
          for (const obj of data) {
            const newPost = new Post(obj.userId, obj.id, obj.title, obj.body);
            this.posts.push(newPost);
          }
        } 
      )
    }
  }

}
