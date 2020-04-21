# COVID-19 API
Ultra simple REST API for apps which neeeds COVID-19. Code is in very early stage, so feel free to open issues or create pull requests. Available here: `https://covid-19-data.herokuapp.com/`

## Country codes

API uses [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) to identify countries. However, there are some items without ISO code. You can access them by using following codes:

| Item             | Code  |
|------------------|-------|
| Diamond Princess | "XDP" |
| Channel Islands  | "XCI" |
| Kosovo           | "XKX" |
| MS Zaandam       | "XZM" |

### Version 1.1.0 changes

Before update Diamond Princess and Channel Islands was identified as DP and CI. Update 1.1.0 uses Alpha-3 user-assigned codes, as pointed in Issue #1. However, due to compatibility reasons, DP and CI code will work correctly, so there is no need to change code based on this API.

## Endpoints

All paths starts with `/api` .

### Cases

#### `/api/cases/global`
Returns full information about all countries. Data should be sorted, but it's not guaranteed. If there is no informations about country stats, key for country doesnt exist. All countries accessible using [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)

Example response:

``` jsonc
{
  "data": {
    "POL": {
      "cases": {
        "infections": 68,
        "activeCases": 67,
        "deaths": 1,
        "recovered": 0,
        "mortalityRate": 0.0147,
        "recoveryRate": 0
      },
      "name": "Poland"
    },
    "PHL": {
      "cases": {
        "infections": 64,
        "activeCases": 57,
        "deaths": 5,
        "recovered": 2,
        "mortalityRate": 0.0781,
        "recoveryRate": 0.0313
      },
      "name": "Philippines"
    }
    // More countries here...
  },
  "provider": "TheBaseLab"
}
```

#### `/api/cases/total`

Returns summary informations.

Example response:

``` json
{
  "data": {
    "cases": {
      "infections": 143848,
      "activeCases": 67543,
      "deaths": 5391,
      "recovered": 70914,
      "mortalityRate": 0.0375,
      "recoveryRate": 0.493
    },
    "name": "Globally"
  },
  "provider": "TheBaseLab"
}
```

#### `/api/cases/:code`

Returns informations about disease spread in selected coutry. Code is [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) string. For non-existent records (country codes not stores) `404` is returned

Example response:

``` json
{
  "data": {
    "cases": {
      "infections": 68,
      "activeCases": 67,
      "deaths": 1,
      "recovered": 0,
      "mortalityRate": 0.0147,
      "recoveryRate": 0
    },
    "name": "Poland"
  },
  "provider": "TheBaseLab"
}
```

## Creating own instance

You can create your own instance on any hosting provider. If you want to run this project on heroku you will need to use [Heroku Redis](https://elements.heroku.com/addons/heroku-redis) and [Puppeteer Heroku Buildpack](https://elements.heroku.com/buildpacks/jontewks/puppeteer-heroku-buildpack)

## Special thanks

Special thanks to [ThaBaseLab](https://coronavirus.thebaselab.com/) for allowing data usage.❤️
