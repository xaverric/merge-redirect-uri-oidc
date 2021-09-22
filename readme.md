# merge-redirect-uri-oidc

Merges redirect uri from source to destination file.

## Prerequisities

* Extract oidc client list from source and destination environment using [oidcClient/list](https://uuapp.plus4u.net/uu-bookkit-maing01/ad1916b8190d46b1bd3bcde1f02a140a/book/page?code=93535514)
* Save export from the command to the file with following convention:

```json
{
	"itemList": [
		{ ... },
		{ ...} ,
		...
	]
}

```

## Usage

```
node index.js [sourceData] [destinationData]
```

Data will be merged into *result.json* in the current working directory.  