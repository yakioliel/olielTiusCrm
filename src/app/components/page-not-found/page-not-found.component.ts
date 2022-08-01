import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-page-header
      class="text-black text-center "
      style="font-size: 25px ;"
      title="page not found !"
      icon="bi bi-exclamation-lg"
      description="The page you are searching for is not found- Error 404"
    ></app-page-header>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
