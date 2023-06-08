function createSecretHolder(secret) {
    console.log(this)
    let obj = this
    obj.getSecret = function() {
        return this
    }
    return secret
}
let obj = createSecretHolder(7)
obj.getSecret()
obj.setSecret(2)
obj.getSecret()
