import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '71c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd7c'),
    exact: true
  },
  {
    path: '/blog/github-gpt',
    component: ComponentCreator('/blog/github-gpt', '513'),
    exact: true
  },
  {
    path: '/blog/openai-api-key',
    component: ComponentCreator('/blog/openai-api-key', '71d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'eaf'),
    exact: true
  },
  {
    path: '/blog/tags/arakoo',
    component: ComponentCreator('/blog/tags/arakoo', '1e0'),
    exact: true
  },
  {
    path: '/blog/tags/chain-of-thought',
    component: ComponentCreator('/blog/tags/chain-of-thought', '9bb'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '6d4'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'e5f'),
    exact: true
  },
  {
    path: '/blog/tags/github',
    component: ComponentCreator('/blog/tags/github', 'e11'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e1e'),
    exact: true
  },
  {
    path: '/blog/tags/llm',
    component: ComponentCreator('/blog/tags/llm', 'eb4'),
    exact: true
  },
  {
    path: '/blog/tags/openai',
    component: ComponentCreator('/blog/tags/openai', '328'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '191'),
    exact: true
  },
  {
    path: '/blog/why-llm',
    component: ComponentCreator('/blog/why-llm', '60a'),
    exact: true
  },
  {
    path: '/pricing',
    component: ComponentCreator('/pricing', '17f'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '1ca'),
    exact: true
  },
  {
    path: '/twilio-video-competitor',
    component: ComponentCreator('/twilio-video-competitor', '9a1'),
    exact: true
  },
  {
    path: '/doc',
    component: ComponentCreator('/doc', '3e8'),
    routes: [
      {
        path: '/doc/category/examples',
        component: ComponentCreator('/doc/category/examples', '1e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc/category/tutorials',
        component: ComponentCreator('/doc/category/tutorials', 'd8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc/Examples/Plugin - Klarna Shopping Search',
        component: ComponentCreator('/doc/Examples/Plugin - Klarna Shopping Search', '944'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc/Examples/Tool - Wikipedia Search',
        component: ComponentCreator('/doc/Examples/Tool - Wikipedia Search', '3c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc/intro',
        component: ComponentCreator('/doc/intro', '89d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc/Tutorials/Creating an API from a Plugin',
        component: ComponentCreator('/doc/Tutorials/Creating an API from a Plugin', 'a4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/handbook',
    component: ComponentCreator('/handbook', '80b'),
    routes: [
      {
        path: '/handbook/code/',
        component: ComponentCreator('/handbook/code/', '2f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/handbook/code/vscode',
        component: ComponentCreator('/handbook/code/vscode', 'baa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/handbook/code/wsl',
        component: ComponentCreator('/handbook/code/wsl', 'd56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/handbook/intro',
        component: ComponentCreator('/handbook/intro', '045'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a2a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
