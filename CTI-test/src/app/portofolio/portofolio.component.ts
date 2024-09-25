import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {

  constructor(private activatedroute: ActivatedRoute, private router: Router) { }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
