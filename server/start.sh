#!/bin/bash

# if [[ "x$PROD" == "x" ]]; then 
# 	echo "This script is for starting in production."
# 	echo "Use"
# 	echo "   mix phx.server"
# 	exit
# fi

# TODO: DONE(?) -> Enable this script by removing the above. 

export SECRET_KEY_BASE=/3RNXd0GgtBZ9IDXP/hBGNAPPkr5UCpZcsoN/0MJTzNghMOG8zd8c0YtuRN1v76f
export PORT=6111
export DATABASE_URL=ecto://website:website_pass@localhost/website_prod
export MIX_ENV=prod

echo "Stopping old copy of app, if any..."

_build/prod/rel/portfolio/bin/portfolio stop || true

echo "Starting app..."

_build/prod/rel/portfolio/bin/portfolio start --verbose

# TODO: Add a systemd service file
#       to start your app on system boot.

