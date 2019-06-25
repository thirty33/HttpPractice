import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../Services/Search/search.service';


@Component({
  selector: 'app-coutry',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  response: Object[]
  constructor(private searchService:SearchService

  ) { }

  ngOnInit() {

  }

  doSearch(term:string) {
    console.log('this is element', term);
    // this.searchService.search()
    //   .subscribe((response: Object[]) => this.response = {
    //     data: response['data']
    //   });
    this.searchService.searchTwo()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        let headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`)
        console.log('this is headers');
        // this.response = {}
        console.log('this is body', resp.body);
        this.response = {...resp.body}
      });
  }

}