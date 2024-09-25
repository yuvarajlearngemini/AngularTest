import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from '../detail/detail.component';
import { PortofolioComponent } from '../portofolio/portofolio.component';


const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'portofolio', component: PortofolioComponent }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  currentPage = 1;
  itemsPerPage = 5;
  searchTerm: string = '';

  datauser = [
    { nama: 'John', pekerjaan: 'Petani', email: 'johndoe@mail.com'},
    { nama: 'Budi', pekerjaan: 'Koki', email: 'budi@mail.com'},
    { nama: 'Bob', pekerjaan: 'Sales', email: 'bob@mail.com' },
    { nama: 'Ali', pekerjaan: 'Penjahit', email: 'ali@mail.com' },
    { nama: 'Sariwangi', pekerjaan: 'Barista', email: 'sari@mail.com' },
    { nama: 'Andi', pekerjaan: 'Dokter', email: 'andi@mail.com' },
    { nama: 'Tina', pekerjaan: 'Guru', email: 'tina@mail.com' },
    { nama: 'Rina', pekerjaan: 'Akuntan', email: 'rina@mail.com' },
    { nama: 'Ahmad', pekerjaan: 'Programmer', email: 'ahmad@mail.com' },
    { nama: 'Siti', pekerjaan: 'Desainer', email: 'siti@mail.com' },
    { nama: 'Fajar', pekerjaan: 'Montir', email: 'fajar@mail.com' },
    { nama: 'Dewi', pekerjaan: 'Pramugari', email: 'dewi@mail.com' },
    { nama: 'Hadi', pekerjaan: 'Pengacara', email: 'hadi@mail.com' },
    { nama: 'Rizky', pekerjaan: 'Arsitek', email: 'rizky@mail.com' },
    { nama: 'Dina', pekerjaan: 'Dokter Hewan', email: 'dina@mail.com' }
  ];
  constructor(private router: Router) { }
  search() {
    const filteredData = this.datauser.filter(user => {
      return user.nama.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             user.pekerjaan.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    this.datauser = filteredData;
    this.currentPage = 1;
  }

  pageCount = Math.ceil(this.datauser.length / this.itemsPerPage);
  pages = Array.from({length: this.pageCount}, (_, i) => i + 1);

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.pageCount) {
      this.currentPage++;
    }
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.pageCount) {
      this.currentPage = page;
    }
  }

  showDetail(user: any){
    console.log(user);
    this.router.navigate(['detail'], { queryParams: { user: JSON.stringify(user) } });
  }

  
  Porto(){
    this.router.navigate(['portofolio']);
  }

  onItemsPerPageChange(event: any) {
    const selectedValue = event.target.value;
    this.currentPage = 1;
    this.itemsPerPage = selectedValue;
  }

  onPageChange(event: any) {
    this.currentPage = event;
  }
}
