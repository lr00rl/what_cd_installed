#!/usr/bin/env zsh

jwt_decode() {
  if [[ "$#" -gt 1 ]]; then
    print -u2 "usage: jwt_decode [token]"
    return 2
  fi

  local token
  if [[ "$#" -eq 1 ]]; then
    token="$1"
  else
    IFS= read -r token
  fi

  if [[ -z "$token" ]]; then
    print -u2 "jwt_decode: token is empty"
    return 2
  fi

  python3 - "$token" <<'PY'
import base64
import json
import sys

token = sys.argv[1].strip()
parts = token.split(".")

if len(parts) < 2:
    raise SystemExit("jwt_decode: expected at least two JWT segments")

def decode_segment(segment):
    segment += "=" * (-len(segment) % 4)
    return base64.urlsafe_b64decode(segment.encode("ascii"))

for label, segment in (("header", parts[0]), ("payload", parts[1])):
    try:
        decoded = json.loads(decode_segment(segment))
    except Exception as exc:
        raise SystemExit(f"jwt_decode: failed to decode {label}: {exc}") from exc
    print(f"== {label} ==")
    print(json.dumps(decoded, indent=2, ensure_ascii=False, sort_keys=True))
PY
}

if [[ "${0:t}" == "jwt_decode.zsh" ]]; then
  jwt_decode "$@"
fi
