# jwt_decode

Decode the header and payload sections of a JWT for quick inspection.

This does not verify the signature. It is only a local inspection helper.

## Run Directly

```bash
zsh ./jwt_decode.zsh "$TOKEN"
```

or:

```bash
printf '%s\n' "$TOKEN" | zsh ./jwt_decode.zsh
```

## Use As A Function

```zsh
source /Users/cdcd/roobli/what_cd_installed/personal_tools/jwt_decode/jwt_decode.zsh
jwt_decode "$TOKEN"
```

It prints two JSON documents:

- JWT header
- JWT payload

The third signature segment is intentionally not decoded or verified.
