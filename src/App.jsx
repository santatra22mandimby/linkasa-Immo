import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardGroup from './components/Card/CardGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleLeft, faAngleRight, faLocationDot, faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react'
import CardLCD from './components/CardLCD/CardLCD'

const teams = {
  teams1: {
    nom: 'Team Bandy',
    img: '/img/teamBandy.jpg',
    membre: 80
  },
  teams2: {
    nom: 'Team Sipa',
    img: '/img/teamSipa.jpg',
    membre: 5
  },
  teams3: {
    nom: 'Team All',
    img: '/img/teamAll.jpg',
    membre: 5,
    detail: 'A propos'
  }
}

const listLCD = {
  home1: {
    name: 'Villa',
    image: '/public/img/villa.webp',
    startPrice: '20.000',
    review: 12,
    star: 3,
    ville: 'Moramanga'
  },
  home2: {
    name: 'Studio',
    image: '/public/img/studio.webp',
    startPrice: '50.000',
    review: 10,
    star: 2,
    ville: 'Tamatave'
  },
  home3: {
    name: 'Appartement T2',
    image: '/public/img/villa-pied-dans-leau.webp',
    startPrice: '150.000',
    review: 10,
    star: 5,
    ville: 'Ampefy'
  },
  home4: {
    name: 'Bungallow',
    image: '/public/img/villa-pied-dans-leau2.webp',
    startPrice: '100.000',
    review: 20,
    star: 3,
    ville: 'Morondava'
  },
  home5: {
    name: 'Gîte LES BLEUETS',
    image: '/public/img/Gîte LES BLEUETS (7).webp',
    startPrice: '200.000',
    review: 30,
    star: 4.5,
    ville: 'toliara'
  },
  home6: {
    name: 'Gîte LES GERANIUMS',
    image: '/public/img/Gîte LES GERANIUMS (2).webp',
    startPrice: '200.000',
    review: 30,
    star: 5,
    ville: 'toliara'
  },
  home7: {
    name: 'Gîte LES GERANIUMS',
    image: '/public/img/Gîte LES GERANIUMS (8).webp',
    startPrice: '200.000',
    review: 30,
    star: 5,
    ville: 'toliara'
  },
  home8: {
    name: 'Maison pierre verdoyante',
    image: '/public/img/Maison pierre verdoyante location saisonniere Saint-Geyrac.webp',
    startPrice: '200.000',
    review: 30,
    star: 3,
    ville: 'toliara'
  },
  home9: {
    name: 'Saint-Geyrac',
    image: '/public/img/Terrasse maison pierre location saisonniere Saint-Geyrac.webp',
    startPrice: '200.000',
    review: 30,
    star: 4,
    ville: 'toliara'
  }
}

class App extends Component {
  state = {
    teams,
    listLCD,
    isShow: false,
    title: null
  }


  /* localstorage */
  componentDidMount() {
    const title = localStorage.getItem('nom')
    const id = localStorage.getItem('id')

    this.setState({ title })
  }

  /* joindre membre */
  handleJoindre = id => {
    const teams = { ... this.state.teams }
    teams[id].membre += 1
    this.setState({ teams })
  }

  /* quitter membre */
  handleQuiter = id => {
    const teams = { ... this.state.teams }
    teams[id].membre -= 1
    this.setState({ teams })
  }

  /* modifier nom membre */
  handleChange = (event, id) => {
    const teams = { ... this.state.teams }
    const nom = event.target.value
    teams[id].nom = nom
    this.setState({ teams })

    localStorage.setItem('nom', nom)
    localStorage.setItem('id', id)
  }

  handleShow = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render() {
    const { isShow } = this.state

    /* condition */
    let title = null

    if (!isShow) {
      title = this.state.title
    }

    /* liste */
    const liste = Object.keys(teams)
      .map(id => (
        <CardGroup
          key={id}
          nameTeam={teams[id].nom}
          imgTeam={teams[id].img}
          membreTeam={teams[id].membre}
          detail={teams[id].detail}
          joindre={() => this.handleJoindre(id)}
          quiter={() => this.handleQuiter(id)}
          updateName={event => this.handleChange(event, id)}
        />
      ))
      
    return (
      <>
        
        {
          title
        }
        <button onClick={this.handleShow}>
          {
            isShow ? 'Supprimer' : 'Partager'
          }
        </button>
        <div className='d-flex row justify-center'>
          {liste}
        </div>

      </>
    )
  }
}

export default App
