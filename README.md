# React Native Components Library Template with Bit

A template for creating React Native components library exported to bit.dev.
This project is creating for helping and save time for everyone that wants to create his own components library and reuse components across projects.
When you start creating your own library, it can be tough and painful with a lot of stuff to do just for settings up your project.
So, this project can be cloned and that's it! just clone and start coding.

## Features

This template comes with several things already setup for you that you need for a completes components library.

- GitHub Actions integrations with Bit
- Exporting components to bit.dev
- PropTypes support

## Configurations

- Create your collection on [bit.dev](bit.dev) and set it to be the default collection in [package.json] Bit config, modify `defaultScope` param with your own.
- For building and exporting components during CI, you need to set your bit token inside a secrets value in your repository.
  Read more about it [here](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository).
  You can read more how to integrate GitHub Actions with Bit [here](https://github.com/teambit/bit-with-github-actions).
- Track all your components under `src/components` with one command: `bit add src/components/*/`.
