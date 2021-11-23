- Nx
- Lerna
- Bit


# Lerna

npm -i g lerna

1. lerna clean

```
lerna info Removing the following directories:
lerna info clean services/allosaurus/node_modules
lerna info clean services/bast/node_modules
lerna info clean services/capricorn/node_modules
```

2. lerna bootstrap --hoist

```
lerna info Bootstrapping 3 packages
lerna info Installing external dependencies
lerna info hoist Installing hoisted dependencies into root
lerna info hoist Pruning hoisted dependencies
lerna info hoist Finished pruning hoisted 
lerna info hoist Finished bootstrapping root
lerna info Symlinking packages and binaries
lerna success Bootstrapped 3 packages
```

3. Initialize library with scope name
 pwd = /packages/logger
`npm init --scope=@mymonorepo --yes`

4. Add library as dependency to a service
 pwd = . <-- root directory
`lerna add @mymonorepo/<package-name> --scope=<service-name>`
> `lerna add @mymonorepo/logger --scope=allosaurus`

NOTE: service-name = allosaurus | bast | capricorn 
