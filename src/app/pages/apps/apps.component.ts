import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {

  apps = [
    {
      name: 'UniversalScheduler',
      description: 'Scedule your meetings no matter where on the globe you are.',
      image: 'assets/images/apps/UniversalScheduler.jpg',
      link: '/apps/universal-scheduler'
    },
    {
      name: 'Fuel Cost Calculator',
      description: 'Everyone asking you to drive you around? Use this to know what they owe you.',
      image: 'assets/images/apps/car.jpg',
      link: '/apps/gas-price-calculator'
    },
    {
      name: 'knappekoppen',
      description: 'A tool used for creating mail templates from an Excel sheet and a mail temlate. and gives a mailto link with a mail template',
      image: 'assets/images/apps/knappekoppen_mail.png',
      link: '/apps/knappe-koppe'
    },
    {
      name: '23plusone',
      description: 'A wheel of fortune made for 23plusone. 23plusone is a scientific method that identifies 24 fundamental human values that people strive for in order to be happy.',
      image: 'assets/images/apps/wheel.png',
      link: '/apps/23plusone'
    }
  ];

  constructor() { }
}
