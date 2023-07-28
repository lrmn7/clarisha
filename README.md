<p align="center">
  <img width="250" height="250" src="https://raw.githubusercontent.com/lrmn7/clarisha/main/.github/logo.png">
</p>

------

clarisha is a **highly-opinionated midwestern self-hosted** Discord music bot **that doesn't suck**. It's made for small to medium-sized Discord servers/guilds (think about a group the size of you, your friends, and your friend's friends).

## Features

- 🎥 Livestreams
- ⏩ Seeking within a song/video
- 💾 Local caching for better performance
- 📋 No vote-to-skip - this is anarchy, not a democracy
- ↔️ Autoconverts playlists / artists / albums / songs from Spotify
- ↗️ Users can add custom shortcuts (aliases)
- 1️⃣ clarisha instance supports multiple guilds
- 🔊 Normalizes volume across tracks
- ✍️ Written in TypeScript, easily extendable
- ❤️ Loyal Packers fan

## Running

clarisha is written in TypeScript. You can either run clarisha with Docker (recommended) or directly with Node.js. Both methods require API keys passed in as environment variables:

- `DISCORD_TOKEN` can be acquired [here](https://discordapp.com/developers/applications) by creating a 'New Application', then going to 'Bot'.
- `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` can be acquired [here](https://developer.spotify.com/dashboard/applications) with 'Create a Client ID'.
- `YOUTUBE_API_KEY` can be acquired by [creating a new project](https://console.developers.google.com) in Google's Developer Console, enabling the YouTube API, and creating an API key under credentials.

clarisha will log a URL when run. Open this URL in a browser to invite clarisha to your server. clarisha will DM the server owner after it's added with setup instructions.

A 64-bit OS is required to run clarisha.


### 🐳 Docker

available:
- `:latest`: latest versions

(Replace empty config strings with correct values.)

```bash
docker run -it -v "$(pwd)/data":/data -e DISCORD_TOKEN='' -e SPOTIFY_CLIENT_ID='' -e SPOTIFY_CLIENT_SECRET='' -e YOUTUBE_API_KEY='' lrmn/clarisha:latest
```

This starts clarisha and creates a data directory in your current directory.

**Docker Compose**:

```yaml
version: '4'

services:
  clarisha:
    image: lrmn/clarisha:latest
    restart: always
    volumes:
      - ./clarisha:/data
    environment:
      - DISCORD_TOKEN=
      - YOUTUBE_API_KEY=
      - SPOTIFY_CLIENT_ID=
      - SPOTIFY_CLIENT_SECRET=
```

### Node.js

**Prerequisites**:
* Node.js (16.x is recommended because it's the current LTS version)
* ffmpeg (4.1 or later)

1. `git clone https://github.com/lrmn7/clarisha.git && cd clarisha`
2. Copy `.env.example` to `.env` and populate with values
4. `yarn install` (or `npm i`)
5. `yarn start` (or `npm run start`)

**Note**: if you're on Windows, you may need to manually set the ffmpeg path.

## ⚙️ Additional configuration (advanced)

### Cache

By default, clarisha limits the total cache size to around 2 GB. If you want to change this, set the environment variable `CACHE_LIMIT`. For example, `CACHE_LIMIT=512MB` or `CACHE_LIMIT=10GB`.

### Custom Bot Status

In the default state, clarisha has the status "Online" and the text "Listening to Music". You can change the status through environment variables:

- `BOT_STATUS`:
  - `online` (Online)
  - `idle` (Away)
  - `dnd` (Do not Disturb)

- `BOT_ACTIVITY_TYPE`:
  - `PLAYING` (Playing clarisha)
  - `LISTENING` (Listening to clarisha)
  - `WATCHING` (Watching clarisha)
  - `STREAMING` (Streaming clarisha)

- `BOT_ACTIVITY`: the text that follows the activity type

- `BOT_ACTIVITY_URL` If you use `STREAMING` you MUST set this variable, otherwise it will not work! Here you write a regular YouTube or Twitch Stream URL.

#### Examples

**clarisha is watching a movie and is DND**:
- `BOT_STATUS=dnd`
- `BOT_ACTIVITY_TYPE=WATCHING`
- `BOT_ACTIVITY=a movie`

**clarisha is streaming Monstercat**:
- `BOT_STATUS=online`
- `BOT_ACTIVITY_TYPE=STREAMING`
- `BOT_ACTIVITY_URL=https://www.twitch.tv/monstercat`
- `BOT_ACTIVITY=Monstercat`

### Bot-wide commands

If you have clarisha running in a lot of guilds (10+) you may want to switch to registering commands bot-wide rather than for each guild. (The downside to this is that command updates can take up to an hour to propagate.) To do this, set the environment variable `REGISTER_COMMANDS_ON_BOT` to `true`.