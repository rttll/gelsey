https://www.sanity.io/docs/importing-data

1. serve index.html and copy to
https://json-to-ndjson.lombax.it/

copy output to out.json

2. cd admin and run

sanity dataset import ../content/press/out.json production --replace


--missing