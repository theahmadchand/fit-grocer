# FitGrocer

Deployed Link: fit-grocer.vercel.app

## Built With

React
Tailwind CSS
Typescript
Vite
NX
Vercel



## Start the app

To start the development server run `npm start` or `yarn start` or `pnpm start` or just simply `nx serve`. Open your browser and navigate to http://localhost:4200/. 


## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Ready to deploy?

Just run `nx build fit-grocer` to build the application. The build artifacts will be stored in the `dist/fit-grocer` directory, ready to be deployed.
