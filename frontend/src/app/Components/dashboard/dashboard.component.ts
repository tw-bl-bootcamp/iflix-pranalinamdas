import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpService, private snackbar: MatSnackBar, private router: Router) { }

  user: User = new User();
  movies :any[] = [];

getMovieList(){

this.httpService.get('movieList').subscribe(
  (res:any)=>{
    console.log("response in dashboard component: ", res);
    this.movies = res.data;
    this.snackbar.open("List opened", "end now", {duration: 4000});
  },
  err=>{
      console.log(err,"in dashboard component");
      this.snackbar.open("can not show movies", "end now", {duration: 4000})
  }
)

}
  ngOnInit() {
    this.getMovieList();
  }

}
