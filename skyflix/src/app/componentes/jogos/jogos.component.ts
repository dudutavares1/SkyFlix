import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss'],
})
export class JogosComponent implements OnInit {

  descricao: any = [


    {
      imagem: "https://1.bp.blogspot.com/-4FMPheWFfxw/YJSF1D5g_5I/AAAAAAAAGMA/mG17lw1-CTkYRU6-yeJsEFh34SUZn9NwwCLcBGAsYHQ/s706/poster.jpg",
      titulo: "Metro Exodus Enhanced Edition",
      lancamento: "2019",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/45265559/Metro_Exodus_Enhanced_Edition-CODEX"
      },

    {
      imagem: "https://1.bp.blogspot.com/-z0rGVNO4IKs/YJErufpEBsI/AAAAAAAAGGQ/yri67-PgDYsu2vBZXNGCaWjk4UmnYhq1ACLcBGAsYHQ/s706/poster.jpg",
      titulo: "Insurgency: Sandstorm",
      lancamento: "2018",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/41786926/Insurgency_Sandstorm_1_9_1-P2P"
        },

    {
      imagem: "https://1.bp.blogspot.com/-ZBqfrO5pTBo/YIgt1oOfRDI/AAAAAAAAF8E/naCKYWh3OCgVRZ4Z5hu-hA6F5OS8o4dWQCLcBGAsYHQ/s400/poster.jpg",
      titulo: "Escape from Tarkov",
      lancamento: "2017",
      plataforma: "PC",
      genero: "Tiro | Simulação | RPG | Ação",
      link: "https://tpb.party/torrent/45449087/Escape_from_Tarkov"  },




    {
      imagem: "https://1.bp.blogspot.com/-s4PAxcozh-E/YGy0CyJEBbI/AAAAAAAAFg4/qiCgw4I0mdES_LloVBZWq_vUC15PIN_egCLcBGAsYHQ/s352/outriders-cover.jpg",
      titulo: "Outriders",
      lancamento: "2021",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/43503275/OUTRIDERS-0xdeadc0de_(Inc._ONLINE-FIX)_RePack_[FULL_GAME]"
      },

    {
      imagem: "https://1.bp.blogspot.com/-fbkKXzz0NMc/YFC_DG-tMXI/AAAAAAAAFWg/BkZ94R79dsMEmNijpF4uTa3RklTxUUgPQCLcBGAsYHQ/s433/Pascals%2BWager%2BDefinitive%2BEdition%2B%2528PC%2529.webp",
      titulo: "Pascals Wager Definitive Edition",
      lancamento: "2021",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/41935075/Pascals_Wager_Definitive_Edition-CODEX"
      },

    {
      imagem: "https://1.bp.blogspot.com/-1gD4Drlcdlo/YCFumbOYaHI/AAAAAAAAE-4/tA9TSGkF4SoKmVrvkAVMkzZTHWHG4LF4wCLcBGAsYHQ/s512/The%2BElder%2BScrolls%2BIV%2BOblivion%2B%2528PC%2529.jpg",
      titulo: "The Elder Scrolls IV: Oblivion",
      lancamento: "2006",
      plataforma: "PC",
      genero: "Ação | Aventura",
      link: "https://tpb.party/torrent/17853794/The_Elder_Scrolls_IV__Oblivion_Game_of_the_Year_Edition_Deluxe_v"
       },

    {
      imagem: "https://1.bp.blogspot.com/-miqBQB6lj1U/YCBxc3ro_pI/AAAAAAAAE-Y/LJ1Ly4gqyj04UOJZVT36qKYAJ8tLYALOgCLcBGAsYHQ/s377/Nioh%2B2%2BThe%2BComplete%2BEdition%2B%2528PC%2529.jpg",
      titulo: "Nioh 2 The Complete Edition",
      lancamento: "2021",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/45314352/Nioh_2_The_Complete_Edition_v1_27_02-P2P"
    },


    {
      imagem: "https://1.bp.blogspot.com/-hlbkcZYecn4/YKCkDZMcbQI/AAAAAAAAGag/0rpQ5W489AY48LT48spa08uKCKoq8LTowCLcBGAsYHQ/s339/Led-It-Rain.jpg",
      titulo: "Led It Rain",
      lancamento: "2018",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/25871650/Pardison_Fontaine_feat._Cardi_B_-_Backin__It_Up_(Lyrics)"
    },



    {
      imagem: "https://1.bp.blogspot.com/-J3FjSzoGms0/XsiFD3SdpoI/AAAAAAAABR8/BXZbvdaSodYpb6AeH0AH8Ig4sNRPQGf3ACLcBGAsYHQ/s1600/poster%2B%25282%2529.jpg",
      titulo: "Assassins Creed Odyssey Gold Edition",
      lancamento: "2018",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/45482252/Assassins_Creed_Odyssey.Gold.Edition.MULTi15-ElAmigos"
    },



    {
      imagem: "https://1.bp.blogspot.com/-cZ4OHzpjPTY/XskyjBQxezI/AAAAAAAABTI/KQqxbc_uL9ozf-2zEFJ5cmV3phTb88kogCLcBGAsYHQ/s1600/poster%2B%25282%2529.jpg",
      titulo: "Castlevania Lords of Shadow Ultimate",
      lancamento: "2013",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/45482007/Castlevania_Lords_of_Shadow_[R.G._Mechanics]"
    },



    {
      imagem: "https://1.bp.blogspot.com/-xsx842yZcok/XsQK1OGpsXI/AAAAAAAAA40/aG1CBHlSFS4WXhdOjIIhoM2rzvwI9Sx-ACLcBGAsYHQ/s1600/poster.jpg",
      titulo: "The Witcher 3: Wild Hunt",
      lancamento: "2015",
      plataforma: "PC",
      genero: "Ação | Aventura | RPG",
      link: "https://tpb.party/torrent/45479693/The_Witcher_3_Wild_Hunt_-_Game_of_the_Year_Edition_[v_1.31___18"
    },

    {
      imagem: "https://1.bp.blogspot.com/-4LjQExs1DA4/XsQ9FR7ka1I/AAAAAAAAA80/TkxV67EK9k8L-jlZFuNL8_Tlo-w8So6sQCLcBGAsYHQ/s320/Batman_Arkham_Knight_Capa.jpg",
      titulo: "Batman: Arkham Knight",
      lancamento: "2015",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/45482852/Batman_Arkham_Origins-RELOADED",
    },

    {
      imagem: "https://1.bp.blogspot.com/-XeZM7rojTuY/XsQOY2lgkkI/AAAAAAAAA5c/I1BvvpX7hEwqBQi99pmN9aYQdZdUunuigCLcBGAsYHQ/s1600/poster%2B%25281%2529.jpg",
      titulo: " Metal Gear Solid V: The Phantom Pain",
      lancamento: "2015",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/45482088/Metal_Gear_Solid.V.The.Phantom.Pain-ALI213",
    },

    {
      imagem: "https://1.bp.blogspot.com/-aVc0Dov9tM8/XsaRA4AvDAI/AAAAAAAABBU/OdViwyGuRgs8oonXDUVImW6xUDryoDIZwCLcBGAsYHQ/s1600/poster.jpg",
      titulo: "Dead Space 3",
      lancamento: "2013",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/45485021/Dead_Space_3_-_Limited_Edition_RePack_by_RG_Revenants",
    },


    {
      imagem: "https://1.bp.blogspot.com/-xNUzy8rMXg4/XsVdTeoemCI/AAAAAAAAA_s/a_OT4TZFsIYjWEIVrCYBzhKKwg-Xkf1JgCLcBGAsYHQ/s1600/poster%2B%25289%2529.jpg",
      titulo: "World War Z GOTY Edition",
      lancamento: "2019",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/36140149/World_War_Z_-_Goty_Edition_-_(2019)_[Update.v1.60]_[DLCs]_RePack",
    },


    {
      imagem: "https://1.bp.blogspot.com/-UaZCG8vLQNw/XsVIS0K_NcI/AAAAAAAAA-U/3hvsJIFJLu45jhMj3ITJHXliI5TIU2lEgCLcBGAsYHQ/s1600/poster%2B%25282%2529.jpg",
      titulo: "Predator Hunting Grounds Digital Deluxe Edition",
      lancamento: "2020",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/41921577/Predator_Hunting_Grounds_v2_16-0xdeadc0de",
    },


    {
      imagem: "https://1.bp.blogspot.com/-5TbSNyZk2u8/XsfRVw0MqoI/AAAAAAAABMk/iHK2gEWmpS8lgdQGglUPeEyR19Abj9_lgCLcBGAsYHQ/s1600/poster%2B%25288%2529.jpg",
      titulo: "Assassins Creed 2 Deluxe Edition",
      lancamento: "2010",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/5481533/Assassins_Creed_II_(2)_[PC]_[RePack]",
    },


    {
      imagem: "https://1.bp.blogspot.com/-V7cCUhMJj-Y/Xsf9xcm_U2I/AAAAAAAABOE/gJjarw-bADAtatDum0DTP_OO-leop6nHwCLcBGAsYHQ/s1600/poster%2B%25281%2529.jpg",
      titulo: "State of Decay 2 Juggernaut Edition",
      lancamento: "2020",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/45483059/State_of_Decay_2_Juggernaut_Edition_-_PLAZA",
    },


    {
      imagem: "https://1.bp.blogspot.com/-1Tk1BEBaCqQ/Xsg-QVIcbNI/AAAAAAAABQc/Tx4rD9geT6sxcp3SDyAoAIbu4T7iGCssQCLcBGAsYHQ/s1600/poster%2B%25288%2529.jpg",
      titulo: "Dead Rising 3 Apocalypse",
      lancamento: "2014",
      plataforma: "PC",
      genero: "Ação",
      link: "https://tpb.party/torrent/11289801/Dead.Rising.3.Apocalypse.Edition.Update5.Repack-R.G.Mechanics",
    },

  ]




    constructor() { }

    ngOnInit() {
    }

  }



