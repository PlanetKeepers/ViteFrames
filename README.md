# Sign In With Farcaster + Vite Demo

This example app shows how to use Sign In With Farcaster in a frontend app without a backend API, using React and Vite.

## Getting Started

```sh
$ git clone https://github.com/farcasterxyz/auth-monorepo.git && cd auth-monorepo/examples/frontend-only
$ yarn install
$ yarn dev
```

# Tutorial

### online

- go to arweave.app
- create a new wallet and store the location
- remember your keyfile location pathway

### terminal

- create

### Troubles

- tailwind docs do not list one step of adding the new index.css file as an import to the main.tsx file

### Building roadmap

- aos PlanetKeeper chatroom

```function Prompt()
    return "PlanetKeeper@aos> "
end
```

- potential --cron (30-minutes)
- Understaning Process Ownership
  Start a new process with the aos console, the ownership of the process is set to your wallet address. aos uses the Owner global variable to define the ownership of the process. If you wish to transfer ownership or lock the process so that no one can own, you simply modify the Owner variable to another wallet address or set it to nil.

- encoding data as json
  When sending data to another process or an external service, you may want to use JSON as a way to encode the data for recipients. Using the json module in lua, you can encode and decode pure lua tables that contain values.

lua
Send({Target = Router, Data = require('json').encode({hello = "world"})})

- upload the website to Arweave to create a full stack Arweave app.
