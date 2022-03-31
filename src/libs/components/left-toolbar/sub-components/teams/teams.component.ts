import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  title = 'Teams'
  teamList = [
  {
    leagueName: "JCL",
    divName: "Division 1",
    teamnumber: 1,
    selected:true,
    hover: false,
    playersList:[  {
      teamName : 'Player Index - JCL 1',
      playerList: [
        {
        img: 'Noor.jpg',
        playerName: "Noor Mohammed",
        playerRole: "WK/Batsman",
        role: "C",
        info: 1,
      },
      {
        img: 'arun.jpeg',
        playerName: "Arun Kumar",
        playerRole: "All Rounder"
      },
      {
        img: 'madhavan.jpeg',
        playerName: "Madhavan Rajendran",
        playerRole: "Batsman"
      },
      {
        img: 'prithvi.jpeg',
        playerName: "Prithvi Raj",
        playerRole: "Bowler"
      },
      {
        img: '887.png',
        playerName: "Srinivas Pedada",
        playerRole: "Batsman"
      },
      {
        img: 'dharani.jpeg',
        playerName: "Dharani Krishna",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Dhinesh Kumar",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Vishal Patel",
        playerRole: "All Rounder",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        playerName: "Dhinesh N",
        playerRole: "Bowler"
      },
      {
        img: 'gurman.jpeg',
        playerName: "Gurman Singh",
        playerRole: "Bowler"
      },
      {
        img: 'leo.jpeg',
        playerName: "Leo Joseph",
        playerRole: "Batsman",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        playerName: "Vijay Sundaram",
        playerRole: "Batsman"
      },
      ]
    },]
  },
  {
    leagueName: "JCL",
    divName: "Division 2",
    teamnumber: 2,
    selected:false,
    hover: false,
    playersList:[  {
      teamName : 'Player Index - JCL 2',
      playerList: [
        {
          img: 'arun.jpeg',
          playerName: "Arun Kumar",
          playerRole: "All Rounder"
        },
        {
        img: 'Noor.jpg',
        playerName: "Noor Mohammed",
        playerRole: "WK/Batsman",
        role: "C",
        info: 1,
      },
      {
        img: 'madhavan.jpeg',
        playerName: "Madhavan Rajendran",
        playerRole: "Batsman"
      },
      {
        img: 'prithvi.jpeg',
        playerName: "Prithvi Raj",
        playerRole: "Bowler"
      },
      {
        img: '887.png',
        playerName: "Srinivas Pedada",
        playerRole: "Batsman"
      },
      {
        img: 'dharani.jpeg',
        playerName: "Dharani Krishna",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Dhinesh Kumar",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Vishal Patel",
        playerRole: "All Rounder",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        playerName: "Dhinesh N",
        playerRole: "Bowler"
      },
      {
        img: 'gurman.jpeg',
        playerName: "Gurman Singh",
        playerRole: "Bowler"
      },
      {
        img: 'leo.jpeg',
        playerName: "Leo Joseph",
        playerRole: "Batsman",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        playerName: "Vijay Sundaram",
        playerRole: "Batsman"
      },
      ]
    },]
  },
  {
    leagueName: "JCL",
    divName: "Division 3",
    teamnumber: 3,
    selected:false,
    hover: false,
    playersList:[  {
      teamName : 'Player Index - JCL 3',
      playerList: [
        {
          img: 'madhavan.jpeg',
          playerName: "Madhavan Rajendran",
          playerRole: "Batsman"
        },
        {
        img: 'Noor.jpg',
        playerName: "Noor Mohammed",
        playerRole: "WK/Batsman",
        role: "C",
        info: 1,
      },
      {
        img: 'arun.jpeg',
        playerName: "Arun Kumar",
        playerRole: "All Rounder"
      },
      {
        img: 'prithvi.jpeg',
        playerName: "Prithvi Raj",
        playerRole: "Bowler"
      },
      {
        img: '887.png',
        playerName: "Srinivas Pedada",
        playerRole: "Batsman"
      },
      {
        img: 'dharani.jpeg',
        playerName: "Dharani Krishna",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Dhinesh Kumar",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Vishal Patel",
        playerRole: "All Rounder",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        playerName: "Dhinesh N",
        playerRole: "Bowler"
      },
      {
        img: 'gurman.jpeg',
        playerName: "Gurman Singh",
        playerRole: "Bowler"
      },
      {
        img: 'leo.jpeg',
        playerName: "Leo Joseph",
        playerRole: "Batsman",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        playerName: "Vijay Sundaram",
        playerRole: "Batsman"
      },
      ]
    },]
  },
  {
    leagueName: "Japan Cup",
    divName: "Division 1",
    teamnumber: 4,
    selected:false,
    hover: false,
    playersList:[  {
      teamName : 'Player Index - Japan Cup',
      playerList: [
        {
          img: 'prithvi.jpeg',
          playerName: "Prithvi Raj",
          playerRole: "Bowler"
        },
        {
          img: 'madhavan.jpeg',
          playerName: "Madhavan Rajendran",
          playerRole: "Batsman"
        },
        {
        img: 'Noor.jpg',
        playerName: "Noor Mohammed",
        playerRole: "WK/Batsman",
        role: "C",
        info: 1,
      },
      {
        img: 'arun.jpeg',
        playerName: "Arun Kumar",
        playerRole: "All Rounder"
      },
      {
        img: '887.png',
        playerName: "Srinivas Pedada",
        playerRole: "Batsman"
      },
      {
        img: 'dharani.jpeg',
        playerName: "Dharani Krishna",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Dhinesh Kumar",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Vishal Patel",
        playerRole: "All Rounder",
        role: "WK"
      },
      {
        img: 'dinesh.jpeg',
        playerName: "Dhinesh N",
        playerRole: "Bowler"
      },
      {
        img: 'gurman.jpeg',
        playerName: "Gurman Singh",
        playerRole: "Bowler"
      },
      {
        img: 'leo.jpeg',
        playerName: "Leo Joseph",
        playerRole: "Batsman",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        playerName: "Vijay Sundaram",
        playerRole: "Batsman"
      },
      ]
    },]
  },
  {
    leagueName: "Japan Cup",
    divName: "Division 2",
    teamnumber: 5,
    selected:false,
    hover: false,
    playersList:[  {
      teamName : 'Player Index - Japan Cup - Division 2',
      playerList: [
        {
          img: 'dinesh.jpeg',
          playerName: "Dhinesh N",
          playerRole: "Bowler"
        },
        {
          img: 'prithvi.jpeg',
          playerName: "Prithvi Raj",
          playerRole: "Bowler"
        },
        {
          img: 'madhavan.jpeg',
          playerName: "Madhavan Rajendran",
          playerRole: "Batsman"
        },
        {
        img: 'Noor.jpg',
        playerName: "Noor Mohammed",
        playerRole: "WK/Batsman",
        role: "C",
        info: 1,
      },
      {
        img: 'arun.jpeg',
        playerName: "Arun Kumar",
        playerRole: "All Rounder"
      },
      {
        img: '887.png',
        playerName: "Srinivas Pedada",
        playerRole: "Batsman"
      },
      {
        img: 'dharani.jpeg',
        playerName: "Dharani Krishna",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Dhinesh Kumar",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Vishal Patel",
        playerRole: "All Rounder",
        role: "WK"
      },
      {
        img: 'gurman.jpeg',
        playerName: "Gurman Singh",
        playerRole: "Bowler"
      },
      {
        img: 'leo.jpeg',
        playerName: "Leo Joseph",
        playerRole: "Batsman",
        role: "C"
      },
      {
        img: 'vijay.jpeg',
        playerName: "Vijay Sundaram",
        playerRole: "Batsman"
      },
      ]
    },]
  },
  {
    leagueName: "KCL",
    divName: "Team 1",
    teamnumber: 6,
    selected:false,
    hover: false,
    playersList:[  {
      teamName : 'Player Index - KCL - Team 1',
      playerList: [
        {
          img: 'leo.jpeg',
          playerName: "Leo Joseph",
          playerRole: "Batsman",
          role: "C"
        },
        {
          img: 'dinesh.jpeg',
          playerName: "Dhinesh N",
          playerRole: "Bowler"
        },
        {
          img: 'prithvi.jpeg',
          playerName: "Prithvi Raj",
          playerRole: "Bowler"
        },
        {
          img: 'madhavan.jpeg',
          playerName: "Madhavan Rajendran",
          playerRole: "Batsman"
        },
        {
        img: 'Noor.jpg',
        playerName: "Noor Mohammed",
        playerRole: "WK/Batsman",
        role: "C",
        info: 1,
      },
      {
        img: 'arun.jpeg',
        playerName: "Arun Kumar",
        playerRole: "All Rounder"
      },
      {
        img: '887.png',
        playerName: "Srinivas Pedada",
        playerRole: "Batsman"
      },
      {
        img: 'dharani.jpeg',
        playerName: "Dharani Krishna",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Dhinesh Kumar",
        playerRole: "Batsman"
      },
      {
        img: '887.png',
        playerName: "Vishal Patel",
        playerRole: "All Rounder",
        role: "WK"
      },
      {
        img: 'gurman.jpeg',
        playerName: "Gurman Singh",
        playerRole: "Bowler"
      },
      {
        img: 'vijay.jpeg',
        playerName: "Vijay Sundaram",
        playerRole: "Batsman"
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
    for(let i = 0; i<this.teamList.length; i++) {
      if (this.teamList[i].teamnumber === card) {
        this.curentTeamView = this.teamList[i].playersList;

      }
      if(this.teamList[i].teamnumber === card) {
        this.teamList[i].selected = true;
      }
      else {
      this.teamList[i].selected = false;
    }
    }
  }


  playerInfo(playerName: any) {
    console.log(playerName, 'playerName')
    this.router.navigate(['../player-info'], {
      relativeTo: this.route,
    }

    );
  }
}
