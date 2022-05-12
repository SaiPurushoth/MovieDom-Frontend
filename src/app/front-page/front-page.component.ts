import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  startIndex:any=0
  Imagedata:any=['https://img.ticketnew.com/tn/offer_banner/multiverse/1920_400.jpg']

  imgCollection: Array<object> = [{
    image:'https://img.ticketnew.com/tn/offer_banner/multiverse/1920_400.jpg',
    thumbImage:'https://img.ticketnew.com/tn/offer_banner/multiverse/1920_400.jpg',
    alt: 'Image 1',
    title: 'Offers Now Available'    
  },{
    image:'https://img.ticketnew.com/tn/offer_banner/don/1920_400_1.jpg',
    thumbImage:'https://img.ticketnew.com/tn/offer_banner/don/1920_400_1.jpg',
    alt: 'Image 1',
    title: 'Offers Available'   
  },{
    image:'https://img.ticketnew.com/tn/offer_banner/sarkaru/1920_400.jpg',
    thumbImage:'https://img.ticketnew.com/tn/offer_banner/sarkaru/1920_400.jpg',
    alt: 'Image 1',
    title: 'Offers Available'   
  }]
  constructor(private route:Router) { }
   ngOnInit(): void {

   }

home()
{
this.route.navigate(['/home'])
}
 

}
