# PayBack coupons activator

The software is a coupon activation tool that automates the process of redeeming coupons on [PayBack]. With this software, users can easily activate all their available coupons with just a few clicks, eliminating the need for manual input and saving time. The software is designed to be user-friendly and easy to operate, making it accessible to individuals with varying levels of technical expertise. Users can simply input their login credentials and select the coupons they want to activate, and the software will handle the rest.

## Installation

For usage of the project you need [Node] & [npm] installed on your machine.
The minimal required version of [Node] is 16.15.0 and for [npm] is 6.14.17.

```sh
cd payback-coupons-activator
npm install
```

## Usage

### Preparing

Edit the following file `.env` with your editor if choice.

Replace the variables with your own Data.

```bash
userEmailOrId="TYPE_YOUR_ID_OR_EMAIL"
userPassword="TYPE_YOUR_PASSWORD"
```

### Headless vr Browser mode

By default, the script is executed in the "headless" mode, i.e. in the background.

If you want to see what actually is being done, you have to change the value of `mode` in the `.env` file from `prod` to `dev`.

### Run

If you want to start the script, you have to execute the following command in the terminal.

```sh
npm run activatePaybackCoupons
```

## Contributing

[Pull-Request] are welcome.

For major changes, please open an [Issue] first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Debugging

For debugging purposes you should run following command

```sh
npm run activatePaybackCoupons:debug
```

## License

[The Unlicense](https://choosealicense.com/licenses/unlicense/)

[PayBack]: (https:/payback.de)
[npm]: (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
[Node]: (https://nodejs.org/en/download/)
[Pull-Request]: (https://github.com/EinfachAleks/payback-coupons-activator/pulls)
[Issue]: (https://github.com/EinfachAleks/payback-coupons-activator/pulls)
