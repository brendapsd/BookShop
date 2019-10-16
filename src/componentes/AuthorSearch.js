import React, { Component } from 'react';
import Suggestions from './Suggestions ';
// import Autosuggest from 'react-autosuggest';

// import Chip from '@material-ui/core/Chip';

const { API_KEY } = process.env
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://api_test1.cientifica.edu.pe/authors"; 

// fetch(proxyurl+url, {
//   headers: {
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA3ODI1OWEwYzYzNjI1Y2Y1MGFmMGVhODY4YTEzOTBjYTZkOTA4ZTBlNmUzYzQ4NzgyOTcxZWU1NDgxNzIyNzdlNGM4OGUzMzYyYWM1NTBhIn0.eyJhdWQiOiIzIiwianRpIjoiMDc4MjU5YTBjNjM2MjVjZjUwYWYwZWE4NjhhMTM5MGNhNmQ5MDhlMGU2ZTNjNDg3ODI5NzFlZTU0ODE3MjI3N2U0Yzg4ZTMzNjJhYzU1MGEiLCJpYXQiOjE1NzExNzIzMDMsIm5iZiI6MTU3MTE3MjMwMywiZXhwIjoxNjAyNzk0NzAzLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.sNqkM1awe48zOEzUxonBMJXApIW1L0V9vrMuDEDn2nAVKoWz9b5rP667mDxBNBFfqxC18cWfeRRRF3JwxlKQ_6r8w2mRNCKJaEFHAuxeIooKA-ejqVNOnMwuz-5yw7kSl2pqWuuhWI5Y6YiwxeUaIw71QaCP9bY9Zc2c7JiktSpvXFZd_5aZ-jjz310rVAeYvjaiWXeJQ-CPEYtRTnHFZ7yHfz_Ts_yHoPV2bwFXK5_DRulYjQBmDeAYQ3yETlCMKjStS0rMIW0gjJg1mIXq58vdU7EV0Q08cegl0Me0leOPsocD0pYCmldxwlPQ4MBeTI7BrkF87Q7e_ibtOIcvu7C8TeSl_ErLlbDS9R4gLnz7fyqS4rbdYnJSIT2PCwYbBj2oYO8Gyno0sPgehFtrDgJp-Go79Ad3Vkq_vNX9aExjEJntlwcaAH2BHDkUYmyXwKRSZ6xI7oCtCNCnwpkd8-biBGfi0M4aiEcQaetHc8RHKggyCCPeP_kh9Yi7NV1svI8BqHpRVVyOg1-wsCQ2XQs_xDRgwZ8BYwaWxX2oRzy7tC7_tjC--PxaFAU2EE6A8efIJe0bCT2Ehfm9bAa7thLlKzmnAtjwdx7TJd4AFzV8P3OZCQpcMGcuCa_cturi43lVDT0z1c4pOZoV2PqUk0oU5FOyCQqXlh6Lf8DI2J0'
//   }
// }) 
// .then(response => response.json())
// .then(contents => {
//   const data = contents.data;
//   console.log(data)
// })
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))



class AuthorSearch extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    fetch(`${proxyurl+url}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`, {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA3ODI1OWEwYzYzNjI1Y2Y1MGFmMGVhODY4YTEzOTBjYTZkOTA4ZTBlNmUzYzQ4NzgyOTcxZWU1NDgxNzIyNzdlNGM4OGUzMzYyYWM1NTBhIn0.eyJhdWQiOiIzIiwianRpIjoiMDc4MjU5YTBjNjM2MjVjZjUwYWYwZWE4NjhhMTM5MGNhNmQ5MDhlMGU2ZTNjNDg3ODI5NzFlZTU0ODE3MjI3N2U0Yzg4ZTMzNjJhYzU1MGEiLCJpYXQiOjE1NzExNzIzMDMsIm5iZiI6MTU3MTE3MjMwMywiZXhwIjoxNjAyNzk0NzAzLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.sNqkM1awe48zOEzUxonBMJXApIW1L0V9vrMuDEDn2nAVKoWz9b5rP667mDxBNBFfqxC18cWfeRRRF3JwxlKQ_6r8w2mRNCKJaEFHAuxeIooKA-ejqVNOnMwuz-5yw7kSl2pqWuuhWI5Y6YiwxeUaIw71QaCP9bY9Zc2c7JiktSpvXFZd_5aZ-jjz310rVAeYvjaiWXeJQ-CPEYtRTnHFZ7yHfz_Ts_yHoPV2bwFXK5_DRulYjQBmDeAYQ3yETlCMKjStS0rMIW0gjJg1mIXq58vdU7EV0Q08cegl0Me0leOPsocD0pYCmldxwlPQ4MBeTI7BrkF87Q7e_ibtOIcvu7C8TeSl_ErLlbDS9R4gLnz7fyqS4rbdYnJSIT2PCwYbBj2oYO8Gyno0sPgehFtrDgJp-Go79Ad3Vkq_vNX9aExjEJntlwcaAH2BHDkUYmyXwKRSZ6xI7oCtCNCnwpkd8-biBGfi0M4aiEcQaetHc8RHKggyCCPeP_kh9Yi7NV1svI8BqHpRVVyOg1-wsCQ2XQs_xDRgwZ8BYwaWxX2oRzy7tC7_tjC--PxaFAU2EE6A8efIJe0bCT2Ehfm9bAa7thLlKzmnAtjwdx7TJd4AFzV8P3OZCQpcMGcuCa_cturi43lVDT0z1c4pOZoV2PqUk0oU5FOyCQqXlh6Lf8DI2J0'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          className="search_query form-control ac_input"
          placeholder="Buscar por autores... "
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default AuthorSearch; 