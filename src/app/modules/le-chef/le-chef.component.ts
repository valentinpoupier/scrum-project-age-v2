import { Component } from '@angular/core';

@Component({
  selector: 'app-le-chef',
  templateUrl: './le-chef.component.html',
  styleUrls: ['./le-chef.component.scss']
})
export class LeChefComponent {

  chef = {
    name: 'Chef',
    title: 'Le Chef',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget ali',
  };

}
