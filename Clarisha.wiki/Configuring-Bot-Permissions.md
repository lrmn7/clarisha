By default, anybody can interact with Muse in any channel (except for `/config`, which can only be used by members with permission to manage the guild).

To change this, go to Server Settings -> Integrations -> Muse and change the default permissions at the top:

<img width="582" alt="Screen Shot 2022-05-13 at 7 58 39 PM" src="https://user-images.githubusercontent.com/7410405/168402613-0b788f19-0a03-4f56-8ab9-c2db96d1d853.png">

Note that there's [currently a bug](https://github.com/discord/discord-api-docs/issues/4863) where the default permission set by Muse for `/config` will not be reflected in Discord's UI. I recommend viewing the guild as a role to test permissions instead of relying on the UI.

