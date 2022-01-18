# VisualCortex Frontend Exercise

## Introduction

This tax calculator website was implemented by using React, Typescript, SASS, React-Redux, React-Router, HTML.

You can check deployment in this [site]: (https://react-ts-9jrkrz.stackblitz.io)

## Structure

```bash
.
└── assets           # Assets
│   	└── variable         	# CSS: font & color variable
├── components       # Components
│   │── Background      # component - background (image, text, form)
│   │── Form            # component - from (calculate, result)
│   └── TaxCompute      # component - tax computation
├── pages            # Pages
│   │── Calculate       # Page - Calculate
│   └── Result        	# Page - Result
├── Redux            # Redux
│   │── actions         # Redux - actions: Calculate
│   │── reducers        # Redux - reducers: Calculate
│   └── store           # Redux - store
```

## Maintainable

- Further options for country and year could be added directly into the form <option>: <select><option></option></select>
- Further tax table for different country year option could be added into <TaxTable>:
  ```bash
  ├── components       # Components
  │   │── Background      # component - background (image, text, form)
  │   │   │── BgForm        # tax result form in background
  │   │   │   │── TaxTable    # tax tables for corresponding country and year
  ```
  Future adjustments to the tax rate values can also be modified in this file.
- All text can be reviewed and modified in [constant.ts] file in each component.
- Further sharable data can be added into the [redux] folder.

## Getting Started

1. Clone this repo to your local machine 
2. Install the dependencies ```[npm install]```


## Run the application

##### ```[npm start]```(This will start the website on the address [localhost:3000](http://localhost:3000))