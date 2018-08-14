# router-confusion
A create-react-app(or cra) application to understand the following concepts.
+ Lightning the dark mysteries of react-router and lifecycle of react
  components, to understand which lifecycle method gets trigged at various
  route changes. Be careful from the magical nature of react-router, it might
  hurt your soul.
+ The turmoil marraige of `prettier` and `eslintc` under the watchful eye of
  `.eslintrc`, the marriage counselor. Use the `.eslintrc` to reduce the code
  driven torture of your fellow developer. The `package.json` have all the
  dependencies declared, however to generate one for you own project try the
  following commands.
> `$_ npm i -g install-peerdeps`   
> `$_> npx install-peerdeps --dev eslint-config-airbnb eslint-config-prettier eslint-config-react-app`   

**Rememeber**: The `.eslintrc` will only and only works with your editor and
should throw errors and warnings inside your editor. It is highly recommended
to fix those warnings and errors. You might have to adjust the `.eslintc`
sometimes.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Then click the routes and watch the console output.

As a last resort you could read [this](https://fiture.me/share/1165.html)
