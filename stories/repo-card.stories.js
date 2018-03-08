'use strict'
import React from 'react'
import { RepoCard } from '../components/repo-card'
import { storiesOf } from '@storybook/react'
import '../css/index.scss'

const api_entry = {
  'id': 121401277,
  'name': 'adr-tools',
  'full_name': 'gaggle/adr-tools',
  'owner': {
    'login': 'gaggle',
    'id': 2316447,
    'avatar_url': 'https://avatars0.githubusercontent.com/u/2316447?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/gaggle',
    'html_url': 'https://github.com/gaggle',
    'followers_url': 'https://api.github.com/users/gaggle/followers',
    'following_url': 'https://api.github.com/users/gaggle/following{/other_user}',
    'gists_url': 'https://api.github.com/users/gaggle/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/gaggle/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/gaggle/subscriptions',
    'organizations_url': 'https://api.github.com/users/gaggle/orgs',
    'repos_url': 'https://api.github.com/users/gaggle/repos',
    'events_url': 'https://api.github.com/users/gaggle/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/gaggle/received_events',
    'type': 'User',
    'site_admin': false
  },
  'private': false,
  'html_url': 'https://github.com/gaggle/adr-tools',
  'description': 'Command-line tools for working with Architecture Decision Records',
  'fork': true,
  'url': 'https://api.github.com/repos/gaggle/adr-tools',
  'forks_url': 'https://api.github.com/repos/gaggle/adr-tools/forks',
  'keys_url': 'https://api.github.com/repos/gaggle/adr-tools/keys{/key_id}',
  'collaborators_url': 'https://api.github.com/repos/gaggle/adr-tools/collaborators{/collaborator}',
  'teams_url': 'https://api.github.com/repos/gaggle/adr-tools/teams',
  'hooks_url': 'https://api.github.com/repos/gaggle/adr-tools/hooks',
  'issue_events_url': 'https://api.github.com/repos/gaggle/adr-tools/issues/events{/number}',
  'events_url': 'https://api.github.com/repos/gaggle/adr-tools/events',
  'assignees_url': 'https://api.github.com/repos/gaggle/adr-tools/assignees{/user}',
  'branches_url': 'https://api.github.com/repos/gaggle/adr-tools/branches{/branch}',
  'tags_url': 'https://api.github.com/repos/gaggle/adr-tools/tags',
  'blobs_url': 'https://api.github.com/repos/gaggle/adr-tools/git/blobs{/sha}',
  'git_tags_url': 'https://api.github.com/repos/gaggle/adr-tools/git/tags{/sha}',
  'git_refs_url': 'https://api.github.com/repos/gaggle/adr-tools/git/refs{/sha}',
  'trees_url': 'https://api.github.com/repos/gaggle/adr-tools/git/trees{/sha}',
  'statuses_url': 'https://api.github.com/repos/gaggle/adr-tools/statuses/{sha}',
  'languages_url': 'https://api.github.com/repos/gaggle/adr-tools/languages',
  'stargazers_url': 'https://api.github.com/repos/gaggle/adr-tools/stargazers',
  'contributors_url': 'https://api.github.com/repos/gaggle/adr-tools/contributors',
  'subscribers_url': 'https://api.github.com/repos/gaggle/adr-tools/subscribers',
  'subscription_url': 'https://api.github.com/repos/gaggle/adr-tools/subscription',
  'commits_url': 'https://api.github.com/repos/gaggle/adr-tools/commits{/sha}',
  'git_commits_url': 'https://api.github.com/repos/gaggle/adr-tools/git/commits{/sha}',
  'comments_url': 'https://api.github.com/repos/gaggle/adr-tools/comments{/number}',
  'issue_comment_url': 'https://api.github.com/repos/gaggle/adr-tools/issues/comments{/number}',
  'contents_url': 'https://api.github.com/repos/gaggle/adr-tools/contents/{+path}',
  'compare_url': 'https://api.github.com/repos/gaggle/adr-tools/compare/{base}...{head}',
  'merges_url': 'https://api.github.com/repos/gaggle/adr-tools/merges',
  'archive_url': 'https://api.github.com/repos/gaggle/adr-tools/{archive_format}{/ref}',
  'downloads_url': 'https://api.github.com/repos/gaggle/adr-tools/downloads',
  'issues_url': 'https://api.github.com/repos/gaggle/adr-tools/issues{/number}',
  'pulls_url': 'https://api.github.com/repos/gaggle/adr-tools/pulls{/number}',
  'milestones_url': 'https://api.github.com/repos/gaggle/adr-tools/milestones{/number}',
  'notifications_url': 'https://api.github.com/repos/gaggle/adr-tools/notifications{?since,all,participating}',
  'labels_url': 'https://api.github.com/repos/gaggle/adr-tools/labels{/name}',
  'releases_url': 'https://api.github.com/repos/gaggle/adr-tools/releases{/id}',
  'deployments_url': 'https://api.github.com/repos/gaggle/adr-tools/deployments',
  'created_at': '2018-02-13T15:45:20Z',
  'updated_at': '2018-02-13T15:45:22Z',
  'pushed_at': '2018-02-05T12:44:59Z',
  'git_url': 'git://github.com/gaggle/adr-tools.git',
  'ssh_url': 'git@github.com:gaggle/adr-tools.git',
  'clone_url': 'https://github.com/gaggle/adr-tools.git',
  'svn_url': 'https://github.com/gaggle/adr-tools',
  'homepage': null,
  'size': 94,
  'stargazers_count': 0,
  'watchers_count': 0,
  'language': 'Shell',
  'has_issues': false,
  'has_projects': true,
  'has_downloads': true,
  'has_wiki': false,
  'has_pages': false,
  'forks_count': 0,
  'mirror_url': null,
  'archived': false,
  'open_issues_count': 0,
  'license': null,
  'forks': 0,
  'open_issues': 0,
  'watchers': 0,
  'default_branch': 'master',
  'permissions': {
    'admin': true,
    'push': true,
    'pull': true
  }
}

storiesOf('Repo Card', module)
  .add('Simple', () =>
    <RepoCard {...api_entry}></RepoCard>
  )