import React, {Component} from "react";
import LanguagesNav from './ui/LanguagesNav';
import fetchPopularRepos from "../utils/api";

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      error: null,
      repos: {},
    }

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading =this.isLoading.bind(this);
  }
  // componentDidMount() {
  //   this.updateLanguage(this.state.selectedLanguage)
  // }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null
    })

    if (!this.state.repos[selectedLanguage]) {
      console.log(selectedLanguage);
      fetchPopularRepos(selectedLanguage)
      .then((data) => {
        this.setState(({repos}) => ({
          repos: {
            ...repos,
            [selectedLanguage]: data
          }
        }))
      })
      .catch(() => {
        console.warn('Error fatching repos', error);
  
        this.setState({
          error: 'There was an error fetching repositories!'
        })
      })
      } 
    }

  isLoading() {
    const { selectedLanguage, error, repos } = this.state

    return !repos[selectedLanguage] && error === null
  }

  render() {
    const { selectedLanguage, error, repos } = this.state

    return (
      <>
        <LanguagesNav 
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <p>Loading</p>}

        {error && <p>{error}</p>}

        {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}
      </>
    )
  }
}
