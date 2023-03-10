import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  ngOnInit(){
    $(function () {
      $('.btn_nav').on("click", function() {
          // animate content
          $('.page__style').addClass('animate_content');
          $('.page__description').fadeOut(2100).delay(2800).fadeIn();
        
          setTimeout(function() {
            $('.page__style').removeClass('animate_content');
          }, 5200);
        
          //remove fadeIn class after 1500ms
          setTimeout(function() {
            $('.page__style').removeClass('fadeIn');
          }, 3500);
        
        });
        
        $('.people_link').on("click",function() {
          setTimeout(function() {
            $('.people').addClass('fadeIn');
          }, 3500);
      });
    });
}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
