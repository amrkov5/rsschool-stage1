function createSecretHolder(secret) {
    let secretStorage = {
        sec: secret,
        getSecret() {
            return this.sec
        },
        setSecret(n) {
            this.sec = n
        }
    }
    return secretStorage
}
let obj = createSecretHolder(7)
console.log(obj)
obj.getSecret()
obj.setSecret(2)
obj.getSecret()
