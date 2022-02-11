import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teamList = [
  {
    leagueName: "JCL",
    divName: "Division 1",
    teamnumber: 1,
    selected:true,
    hover: true,
    playersList:[  {
      teamName : 'Player Index - JCL 1',
      playerList: [
        {
        img: 'Noor.jpg',
        firstName: "Noor Mohammed",
        lastName: "Ibrahim",
        role: "C",
        info: 1,
      },
      {
        img: 'arun.jpeg',
        firstName: "Arun",
        lastName: "Kumar"
      },
      {
        img: 'madhavan.jpeg',
        firstName: "Madhavan",
        lastName: "Rajendran"
      },
      {
        img: 'prithvi.jpeg',
        firstName: "Prithvi",
        lastName: "Raj"
      },
      {
        img: '887.png',
        firstName: "Srinivas",
        lastName: "Pedada"
      },
      {
        img: 'dharani.jpeg',
        firstName: "Dharani ",
        lastName: "Krishna"
      },
      {
        img: '887.png',
        firstName: "Dhinesh",
        lastName: "N"
      },
      {
        img: '887.png',
        firstName: "Vishal",
        lastName: "Patel",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        firstName: "Dhinesh",
        lastName: "Kumar"
      },
      {
        img: 'gurman.jpeg',
        firstName: "Gurman",
        lastName: "Singh"
      },
      {
        img: 'leo.jpeg',
        firstName: "Leo",
        lastName: "Joseph",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        firstName: "Vijay",
        lastName: "Sundaram"
      },
      ]
    },]
  },
  {
    leagueName: "JCL",
    divName: "Division 2",
    teamnumber: 2,
    playersList:[  {
      teamName : 'Player Index - JCL 2',
      playerList: [
        {
          img: 'dharani.jpeg',
          firstName: "Dharani ",
          lastName: "Krishna"
        },
        {
        img: 'Noor.jpg',
        firstName: "Noor Mohammed",
        lastName: "Ibrahim",
        role: "C"
      },
      {
        img: 'arun.jpeg',
        firstName: "Arun",
        lastName: "Kumar"
      },
      {
        img: 'madhavan.jpeg',
        firstName: "Madhavan",
        lastName: "Rajendran"
      },
      {
        img: 'prithvi.jpeg',
        firstName: "Prithvi",
        lastName: "Raj"
      },
      {
        img: '887.png',
        firstName: "Srinivas",
        lastName: "Pedada"
      },
      {
        img: '887.png',
        firstName: "Dhinesh",
        lastName: "N"
      },
      {
        img: '887.png',
        firstName: "Vishal",
        lastName: "Patel",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        firstName: "Dhinesh",
        lastName: "Kumar"
      },
      {
        img: 'gurman.jpeg',
        firstName: "Gurman",
        lastName: "Singh"
      },
      {
        img: 'leo.jpeg',
        firstName: "Leo",
        lastName: "Joseph",
      },
      {
        img: 'vijay.jpeg',
        firstName: "Vijay",
        lastName: "Sundaram"
      },
      ]
    },]
  },
  {
    leagueName: "JCL",
    divName: "Division 3",
    teamnumber: 3,
    playersList:[  {
      teamName : 'Player Index - JCL 3',
      playerList: [
        {
          img: 'gurman.jpeg',
          firstName: "Gurman",
          lastName: "Singh"
        },
        {
        img: 'Noor.jpg',
        firstName: "Noor Mohammed",
        lastName: "Ibrahim",
        role: "C"
      },
      {
        img: 'arun.jpeg',
        firstName: "Arun",
        lastName: "Kumar"
      },
      {
        img: 'madhavan.jpeg',
        firstName: "Madhavan",
        lastName: "Rajendran"
      },
      {
        img: 'prithvi.jpeg',
        firstName: "Prithvi",
        lastName: "Raj"
      },
      {
        img: '887.png',
        firstName: "Srinivas",
        lastName: "Pedada"
      },
      {
        img: 'dharani.jpeg',
        firstName: "Dharani ",
        lastName: "Krishna"
      },
      {
        img: '887.png',
        firstName: "Dhinesh",
        lastName: "N"
      },
      {
        img: '887.png',
        firstName: "Vishal",
        lastName: "Patel",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        firstName: "Dhinesh",
        lastName: "Kumar"
      },
      {
        img: 'leo.jpeg',
        firstName: "Leo",
        lastName: "Joseph",
      },
      {
        img: 'vijay.jpeg',
        firstName: "Vijay",
        lastName: "Sundaram"
      },
      ]
    },]
  },
  {
    leagueName: "Japan Cup",
    divName: "Division 1",
    teamnumber: 4,
    playersList:[  {
      teamName : 'Player Index - Japan Cup 1',
      playerList: [

      {
        img: 'madhavan.jpeg',
        firstName: "Madhavan",
        lastName: "Rajendran"
      },
      {
        img: 'prithvi.jpeg',
        firstName: "Prithvi",
        lastName: "Raj"
      },
      {
        img: 'Noor.jpg',
        firstName: "Noor Mohammed",
        lastName: "Ibrahim",
        role: "C"
      },
      {
        img: 'arun.jpeg',
        firstName: "Arun",
        lastName: "Kumar"
      },
      {
        img: '887.png',
        firstName: "Srinivas",
        lastName: "Pedada"
      },
      {
        img: 'dharani.jpeg',
        firstName: "Dharani ",
        lastName: "Krishna"
      },
      {
        img: '887.png',
        firstName: "Dhinesh",
        lastName: "N"
      },
      {
        img: '887.png',
        firstName: "Vishal",
        lastName: "Patel",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        firstName: "Dhinesh",
        lastName: "Kumar"
      },
      {
        img: 'gurman.jpeg',
        firstName: "Gurman",
        lastName: "Singh"
      },
      {
        img: 'leo.jpeg',
        firstName: "Leo",
        lastName: "Joseph",
      },
      {
        img: 'vijay.jpeg',
        firstName: "Vijay",
        lastName: "Sundaram"
      },
      ]
    },]
  },
  {
    leagueName: "Japan Cup",
    divName: "Division 2",
    teamnumber: 5,
    playersList:[  {
      teamName : 'Player Index - Japan Cup 2',
      playerList: [
        {
          img: '887.png',
          firstName: "Srinivas",
          lastName: "Pedada"
        },

      {
        img: 'arun.jpeg',
        firstName: "Arun",
        lastName: "Kumar"
      },
      {
        img: 'madhavan.jpeg',
        firstName: "Madhavan",
        lastName: "Rajendran"
      },
      {
        img: 'prithvi.jpeg',
        firstName: "Prithvi",
        lastName: "Raj"
      },

      {
        img: 'dharani.jpeg',
        firstName: "Dharani ",
        lastName: "Krishna"
      },
      {
        img: '887.png',
        firstName: "Dhinesh",
        lastName: "N"
      },
      {
        img: '887.png',
        firstName: "Vishal",
        lastName: "Patel",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        firstName: "Dhinesh",
        lastName: "Kumar"
      },
      {
        img: 'gurman.jpeg',
        firstName: "Gurman",
        lastName: "Singh"
      },
      {
        img: 'leo.jpeg',
        firstName: "Leo",
        lastName: "Joseph",
      },
      {
        img: 'Noor.jpg',
        firstName: "Noor Mohammed",
        lastName: "Ibrahim",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        firstName: "Vijay",
        lastName: "Sundaram"
      },
      ]
    },]
  },
  {
    leagueName: "KCL",
    divName: "Team 1",
    teamnumber: 6,
    playersList:[  {
      teamName : 'Player Index - KCL 1',
      playerList: [
        {
          img: 'leo.jpeg',
          firstName: "Leo",
          lastName: "Joseph",
        },
      {
        img: 'arun.jpeg',
        firstName: "Arun",
        lastName: "Kumar"
      },
      {
        img: 'madhavan.jpeg',
        firstName: "Madhavan",
        lastName: "Rajendran"
      },
      {
        img: 'prithvi.jpeg',
        firstName: "Prithvi",
        lastName: "Raj"
      },
      {
        img: '887.png',
        firstName: "Srinivas",
        lastName: "Pedada"
      },
      {
        img: 'dharani.jpeg',
        firstName: "Dharani ",
        lastName: "Krishna"
      },
      {
        img: '887.png',
        firstName: "Dhinesh",
        lastName: "N"
      },
      {
        img: '887.png',
        firstName: "Vishal",
        lastName: "Patel",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        firstName: "Dhinesh",
        lastName: "Kumar"
      },
      {
        img: 'gurman.jpeg',
        firstName: "Gurman",
        lastName: "Singh"
      },
      {
        img: 'Noor.jpg',
        firstName: "Noor Mohammed",
        lastName: "Ibrahim",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        firstName: "Vijay",
        lastName: "Sundaram"
      },
      ]
    },]
  },
]

curentTeamView: any = [

]


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.curentTeamView = this.teamList[0].playersList;
  }

  showTeamSquad(card: number) {
    console.log(card,'teamnumber')
    for(let i = 0; this.teamList.length-1; i++) {
      console.log(this.teamList,'teamList')
      if (this.teamList[i].teamnumber === card) {
        console.log(this.teamList[i].teamnumber, 'this.teamList[i].teamnumber')
        this.curentTeamView = this.teamList[i].playersList;
      }
      this.teamList[i].selected = false;

    }
  }

  playerInfo(Firstname: any) {
    console.log(Firstname, 'Firstname')
    this.router.navigate(['../player-info'], {
      relativeTo: this.route,
    }

    );
  }
}
