import sha256 from "crypto-js/sha256"
import { JSEncrypt } from "jsencrypt"

import { PUBLIC_KEY } from "~/utils/config"

const crypto = new JSEncrypt()

crypto.setPublicKey(PUBLIC_KEY)

export const decrypt = (raw: string, signature: string) => {
  const data = crypto.verify(raw, signature, sha256)
  return data ? raw : `{ "token": "" }`
}

export const validate = (token, signature) => {
  const data = decrypt(JSON.stringify({ token }), signature)

  const parse = JSON.parse(data)
  return parse.token ? parse.token : ""
}
