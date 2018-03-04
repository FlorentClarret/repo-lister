import GithubColors from 'github-colors'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import urljoin from 'url-join'

import OptionalLink from './optional-link'

class GithubStat extends Component {
  render () {
    return (
      <span className='gh-stat' {...this.props}>
        {this.props.children}
      </span>
    )
  }
}

export class Language extends Component {

  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    const lookup = GithubColors.get(this.props.language)
    this.color = lookup ? `color: ${lookup.color};` : ''
  }

  render () {
    return (
      <GithubStat>
        <span className="lang">●</span>
        <span>{this.props.language}</span>
        <style jsx>{`
          .lang {
            ${this.color}
            padding-right: 4px;
          }
        `}</style>
      </GithubStat>
    )
  }
}

export class Issues extends Component {

  static defaultProps = {
    html_url: undefined,
    open_issues_count: undefined,
  }

  constructor (props) {
    super(props)
    this.url = props.html_url ? urljoin(this.props.html_url, 'issues') : null
  }

  render () {
    return (
      <GithubStat>
        <OptionalLink href={this.url}><a>
          <span className="icon ion-md-information-circle mr-1"/>
          {this.props.open_issues_count}
        </a></OptionalLink>
      </GithubStat>
    )
  }
}

export class PullRequests extends Component {

  static defaultProps = {
    html_url: undefined,
    open_issues_count: undefined,
  }

  constructor (props) {
    super(props)
    this.url = props.html_url ? urljoin(this.props.html_url, 'pulls') : null
  }

  render () {
    return (
      <GithubStat>
        <OptionalLink href={this.url}><a>
          <span className="icon ion-md-git-pull-request mr-1"/>
          {this.props.open_issues_count}
        </a></OptionalLink>
      </GithubStat>
    )
  }
}
