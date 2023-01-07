## What is microfrontends?
divide monolithic app into multiple smaller app
each smaller app is responsible for a distinct feature of the product

why use them
Multiple engineering teams can work in isolation
Each smaller app is easier to understand and make changes to


## Integration
# Build Time integration

Container gets access to the source code before loaded browser
(Build the code as NPM package, to be installed in other project)
# Run Time Integration

After
code deployed at specific URL,container will fetch from URL and executes it 

# Server Integration  
//

# Module Federation Plugin
1. remoteEntry.js

  manifest of source. list all the files emit by plugin and how to use them.(like container)

2. why index.js?
  
  Index.js allow webpack have opportunity to load up code from products before running bootstrap.js. 
  
when you use shared package, in seperate page, the package will be loaded async, the package will not be available. 
But for the container, first load remote entry file with configuration, webpack will have time to load package.

import('./bootstrap');
This form, will load package async
^4.1.0 means can use minor version or patch version 1-4,4.0-4.n 小+同
~4.1.0 4.x.x but not 5.0.0 or 3.x.x 同
*4.1.0 any version, may install latest version 最新
@4.1.0 directly choose this version 指定
if use 	shared: { faker: { singleton: true } }, singleton will get warning remoteEntry.js:951 Unsatisfied version 5.1.0 from products of shared singleton module faker (required ^4.1.0) indicate which require different version of package copy 