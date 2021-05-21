https://www.sanity.io/docs/importing-data

1. serve index.html and copy to
https://json-to-ndjson.lombax.it/

copy output to out.json

2. cd admin and run

sanity dataset import ../content/{DIR}/parsed.json production --replace

sanity dataset import ../content/events/parsed.json production --replace
sanity dataset import ../content/pubs/parsed.json production --replace


--missing