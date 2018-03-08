import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Card, CardBody, CardColumns, CardText, CardTitle } from 'reactstrap'

import renderIf from '../lib/render-if'

import { Issues, Language, PullRequests } from './github-components'

export class RepoCards extends Component {

  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  render () {
    return (
      <CardColumns>
        {this.props.children.map(child =>
          <RepoCard key={child.id} {...child}/>
        )}
      </CardColumns>
    )
  }
}

export class RepoCard extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.any.isRequired,
  }

  static defaultProps = {
    onClick: () => {},
    description: 'description',
    html_url: 'html_url',
    issues_url: 'issues_url',
    language: 'language',
    name: 'name',
    open_issues_count: 0,
    owner: {
      html_url: 'html_url',
      login: 'login',
    },
  }

  render () {
    return (
      <div className={this.constructor.name}>
        <Card className="Foo" key={this.props.id}>
          <CardBody>
            <CardTitle>
              <div>
                <div>
                  <Link href={this.props.owner.html_url}>
                    <a>{this.props.owner.login}</a>
                  </Link>
                  {' / '}
                  <Link href={this.props.html_url}>
                    <a>{this.props.name}</a>
                  </Link>
                </div>
              </div>
            </CardTitle>
            <CardText>{this.props.description}</CardText>
            <CardText className="gh-stats">
              {renderIf(this.props.language, () =>
                <Language {...this.props} />
              )}
              <Issues {...this.props} />
              <PullRequests {...this.props} />
            </CardText>
            <Button className="btn-sm">More info</Button>
          </CardBody>
        </Card>
        <style jsx="true">{`
          .${this.constructor.name} :global(.gh-stats > *) {
            margin: 1px 8px 1px 0;
          }
        `}</style>
      </div>
    )
  }
}
