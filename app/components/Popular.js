import React, {Component} from "react";
import LanguagesNav from './ui/LanguagesNav';
import fetchPopularLanguage from "../utils/api";

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      error: null,
      repos: null,
    }

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading =this.isLoading.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
      repos: null
    })

    fetchPopularLanguage(selectedLanguage).then((repos) => this.setState({
      repos,
      error: null
    })).catch(() => {
      console.warn('Error fatching repos', error);

      this.setState({
        error: 'There was an error fetching repositories!'
      })
    })
  }

  isLoading() {
    return this.state.repos === null && this.state.error === null;
  }

  render() {
    const { selectedLanguage, error, repos } = this.state

    return (
      <>
        <LanguagesNav 
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
      </>
    )
  }
}
