#!/bin/bash

#export SECRET_KEY_BASE=W68eso5YQOlbtvSNUR50N/HDWj6IaEhAwMR3LtzuBEQAefwYVbX84bvoTA7XtiGi
export SECRET_KEY_BASE=/3RNXd0GgtBZ9IDXP/hBGNAPPkr5UCpZcsoN/0MJTzNghMOG8zd8c0YtuRN1v76f
export MIX_ENV=prod
# export PORT=5080
# export NODEBIN=`pwd`/assets/node_modules/.bin
# export PATH="$PATH:$NODEBIN"
export PORT=6111
export DATABASE_URL=ecto://websitev2:websiteV2@localhost/website_v2


echo "Building..."

mix ecto.reset

mix deps.get --only prod
mix compile
# (cd assets && npm install)
# (cd assets && webpack --mode production)
mix phx.digest

echo "Generating release..."
mix release

#echo "Stopping old copy of app, if any..."
#_build/prod/rel/bullshw05/bin/bullshw05 stop || true

echo "Starting app..."

PROD=t ./start.sh
