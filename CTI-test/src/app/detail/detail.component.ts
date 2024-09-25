import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  user: any;

  constructor(private activatedroute: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.user = JSON.parse(params['user']);
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
