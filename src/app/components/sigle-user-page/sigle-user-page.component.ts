import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-sigle-user-page',
  templateUrl: './sigle-user-page.component.html',
  styleUrls: ['./sigle-user-page.component.scss'],
})
export class SigleUserPageComponent implements OnInit {
  users: User[] = [];
  user2!: User;

  constructor(
    private route: ActivatedRoute,
    private conServ: ConnectionService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conServ
      .getUsers()
      .subscribe((userArray: User[]) => this.checkUser(userArray, id));
  }

  checkUser(array: User[], id: number) {
    const user1 = array.find((user) => user.id === id)!;
    this.user2 = user1;
  }
}
